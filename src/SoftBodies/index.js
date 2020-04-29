import React, { useEffect, useRef, useState } from 'react';

import { BoxConstraint, ParticleSystem, DirectionalForce, DistanceConstraint, Vec3 } from 'particulate';

function getBlobPositions(radius, stride, offset = [0, 0]) {
    const particles = [];
    for (let x = 0; x < 2 * radius; x += stride ) {
        for (let y = 0; y < 2 * radius; y += stride) {
            const ang = Math.atan2(y, x);
            if (Math.abs(x - radius) < Math.abs(radius * Math.cos(ang)) &&
                Math.abs(y - radius) < Math.abs(radius * Math.sin(ang))) {
                    particles.push({ x: x + offset[0], y: y + offset[1] });
            }
        }
    }
    return particles;
}

function getConstraints(positions, stride, offset) {
    const constraints = [];
    for (let i = 0; i < positions.length; i++) {
        const close = getClose(positions[i], positions, 2 * stride);
        close.forEach((particleIndex) => {
            constraints.push([i + offset, particleIndex + offset]);
        });
    }
    return constraints.flat();
}

function createBlobs(numBlobs, radius, stride, relaxIterations = 2, simplifyCollisions = 0.1) {
    //get an array of arrays of positions for each blob
    const blobs = [...Array(numBlobs)].map((_, i) => getBlobPositions(radius, stride, [i * 100, 700]));
    //get an array of array of constraint pairs for each blob, with indicies offset
    // to account for system-wide indexes
    const springs = blobs.map((positions, i) => getConstraints(positions, stride, i * blobs[0].length));

    //fake collision behavior by setting distance constraints with a minimum
    //start by selecting a few particles from each blob, as determined by simplifyCollisions factor
    let sampledParticles = blobs.map((particles) => particles.filter((_, i) => i % (1/simplifyCollisions) === 0));
    //replace the position with a "real" index that represents its place in the flattened array
    const sampledBlobLen = sampledParticles[0].length;
    sampledParticles = sampledParticles.map((blob, bi) => blob.map((_, i) => bi * sampledBlobLen + i));
    //now set up distance constraints
    const collisions = []
    for (let cur = 0; cur < sampledParticles.length; cur++) {
        for (let bi = 0; bi < sampledParticles.length; bi++) {
            if (cur !== bi) {
                for (let i = 0; i < sampledParticles[bi].length; i++) {
                    for (let j = 0; j < sampledParticles[cur].length; j++) {
                        collisions.push(sampledParticles[cur][j]);
                        collisions.push(sampledParticles[bi][i]);
                    }
                }
            }
        }
    }

    const system = ParticleSystem.create(blobs.flat().length, relaxIterations);
    blobs.flat().forEach((position, i) => {
        system.setPosition(i, position.x, position.y, 0);
    });
    const springConstraint = DistanceConstraint.create([1.5 * stride, 2 * stride], springs.flat());
    const fakeCollisionConstraint = DistanceConstraint.create([stride * 2, Infinity], collisions);
    const boundingBox = BoxConstraint.create([0, 0, 0], [1200, 800, 1]);
    const gravity = DirectionalForce.create([0, 0.001, 0]);

    system.addConstraint(springConstraint);
    system.addConstraint(boundingBox);
    system.addConstraint(fakeCollisionConstraint);
    system.addForce(gravity);
    return system;
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
    const bounds = {};
    const center = { x: bounds.min.x + (bounds.max.x - bounds.min.x) / 2, y: bounds.min.y + (bounds.max.y - bounds.min.y) / 2 }
    const numOuter = 30;
    const outerParticles = [];
    for(let i = 0; i < numOuter; i++) {
        const ang = (i / numOuter) * 2 * Math.PI;
        const x = Math.cos(ang) * radius*1.2 + center.x;
        const y = Math.sin(ang) * radius*1.2 + center.y;
        outerParticles.push(getClosestToPosition(x, y, group));
    }
    return outerParticles;
}

function getSvgPathFromParticles(system) {
    let vec = Vec3.create(1);
    system.getPosition(0, vec);
    let path = `M ${vec[0]} ${vec[1]} `;
    system.each((i) => {
        if (i > 0) {
            system.getPosition(i, vec);
            path += `L ${vec[0]} ${vec[1]} `;
        }

    });
    return path  + 'z';
}

function getParticles(system) {
    let vec = Vec3.create(1);
    const particles = [];
    system.each((i) => {
        system.getPosition(i, vec);
        particles.push([vec[0], vec[1]]);
    })
    return particles;
}


function getClose(particle, particles, maxDistance) {
    let close = [];
    for(let i = 0; i < particles.length; i++) {
        const dist = Math.sqrt(Math.pow(particle.x - particles[i].x, 2) + Math.pow(particle.y - particles[i].y, 2));
        if (particle !== particles[i] && dist < maxDistance) {
            close.push(i)
        }
    }
    return close;
}

export default function SoftBodies({ 
        bodies = [...Array(11)].map((n) => ({ name: `Artist ${n}`})) },
        blobRadius = 100,
        particleRadius = 15
    ) {
    const wrapper = useRef(null);
    const [paths, setPaths] = useState([]);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const system = createBlobs(bodies.length, 50, 3);
        window.setInterval(() => {
            system.tick(5);
            //setPaths(getSvgPathFromParticles(system));
            setParticles(getParticles(system));
        }, 1000/60);
    }, []);


    

    return (
        <div ref={wrapper}>
            <svg width={1280} height={800}> 
                <path key={0} fill="transparent" stroke="black" d={paths} />
                {particles.map((p, i) => <circle key={i} r={1} cx={p[0]} cy={p[1]} /> )}
            </svg>
         </div>
    );
}