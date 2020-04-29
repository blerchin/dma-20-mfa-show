import React, { useEffect, useRef, useState } from 'react';

import { Composite, Constraint, Bodies, Events, Engine, Query,Runner, World } from 'matter-js';

function fillShape(group, shape, stride, cb) {
    const bounds = shape.bounds;
    for (let x = bounds.min.x; x < bounds.max.x; x += stride ) {
        for (let y = bounds.min.y; y < bounds.max.y; y += stride) {
            const particle = cb(x, y);
            if (Query.collides(particle, [shape]).length) {
                Composite.add(group, particle);
            } 
        }
    }
}

function getClosestToPosition(x, y, bodies) {
    let closest = null;
    let leastDistance = Infinity;
    for(let i = 0; i < bodies.length; i++) {
        const dist = Math.sqrt(Math.pow(x - bodies[i].position.x, 2) + Math.pow(y - bodies[i].position.y, 2));
        if (dist < leastDistance) {
            closest = bodies[i];
            leastDistance = dist;
        }
    }
    return closest;
}

function getOuterParticles(group, radius) {
    const bounds = Composite.bounds(group);
    const center = { x: bounds.min.x + (bounds.max.x - bounds.min.x) / 2, y: bounds.min.y + (bounds.max.y - bounds.min.y) / 2 }
    const numOuter = 30;
    const outerParticles = [];
    for(let i = 0; i < numOuter; i++) {
        const ang = (i / numOuter) * 2 * Math.PI;
        const x = Math.cos(ang) * radius*1.2 + center.x;
        const y = Math.sin(ang) * radius*1.2 + center.y;
        outerParticles.push(getClosestToPosition(x, y, Composite.allBodies(group)));
    }
    return outerParticles;
}

function getSvgPathFromParticles(particles) {
    const positions = particles.map((p) => [p.position.x, p.position.y]);
    let path = `M ${positions[0][0]} ${positions[0][1]} `;
    for (let i = 1; i < positions.length; i++) {
        path += `L ${positions[i][0]} ${positions[i][1]} `;
    }
    return path  + 'z';
}


function getClose(body, bodies, maxDistance) {
    let close = [];
    for(let i = 0; i < bodies.length; i++) {
        const dist = Math.sqrt(Math.pow(body.position.x - bodies[i].position.x, 2) + Math.pow(body.position.y - bodies[i].position.y, 2));
        if (body !== bodies[i] && dist < maxDistance) {
            close.push(bodies[i])
        }
    }
    return close;
}

function addSprings(group, length, constraintOptions = { stiffness: 0.2, damping: 0, render: { visible: false } }) {
    const particles = Composite.allBodies(group);
    for (let i = 0; i < particles.length; i++) {
        const close = getClose(particles[i], particles, length + 0.01);
        /*const connections = Composite.allConstraints(group).reduce((m, c) => [...m, c.bodyA, c.bodyB], []);
        console.log(connections);
        const connectableBody = close.filter((body) => 
            connections.filter((b) => body === b).length < 3
        );
        */
        close.forEach((particle) => {
            const constraint = Constraint.create({
                bodyA: particles[i],
                bodyB: particle,
                length: length * 1.1,
                ...constraintOptions
            });
            Composite.add(group, constraint);
        });
    }
}

function createParticleGroup(shape = Bodies.circle(100, 100, 10), particleRadius, particleOptions = { density: 1, restitution: 0, friction: 1, frictionStatic: 10}, constraintOptions = null) {
    console.log("create group")
    const group = Composite.create();
    fillShape(group, shape, 1.5 * particleRadius, (x, y) => Bodies.circle(x, y, particleRadius, particleOptions));
    addSprings(group, particleRadius * 2);
    return group;
}

export default function SoftBodies({ 
        bodies = [...Array(11)].map((n) => ({ name: `Artist ${n}`})) },
        particleOptions = {
            friction: 0.3,
            frictionStatic: 0.5,
            render: { visible: true}
        },
        blobRadius = 100,
        particleRadius = 15
    ) {
    const wrapper = useRef(null);
    const [paths, setPaths] = useState([]);

    useEffect(() => {
        const engine = Engine.create({ constraintIterations: 30, positionIterations: 10, enableSleeping: true });
        const world = engine.world;
        
        const runner = Runner.create();
        const blobs = bodies.map((el, i) => createParticleGroup(
            Bodies.circle(120 + (i % 4) * 200 + Math.random()* 120, 200 + Math.floor(i/4) * 200, blobRadius),
            particleRadius
            ));
        World.add(world, [
            ...blobs,
            //walls
            Bodies.rectangle(400, 0, 1600, 50, { isStatic: true }),
            Bodies.rectangle(400, 800, 1600, 50, { isStatic: true }),
            Bodies.rectangle(1200, 300, 50, 1000, { isStatic: true }),
            Bodies.rectangle(0, 300, 50, 1000, { isStatic: true })
        ]);
        Runner.run(runner, engine);
        Events.on(runner, "afterTick", () => {
            setPaths(blobs.map((blob) => getSvgPathFromParticles(getOuterParticles(blob, blobRadius))))
        })
    }, []);

    

    return (
        <div ref={wrapper}>
            <svg width={1280} height={800}> 
                { paths.map((path, i) => (<path key={i} fill="transparent" stroke="black" d={path} />)) }
            </svg>
         </div>
    );
}