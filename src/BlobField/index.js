import React, { useRef, useEffect } from 'react';
import createElasticParticles from './createElasticParticles';
import Renderer from './Renderer';
import { render } from 'react-dom';

const { b2Vec2, b2World } = liquidfun; 

const resetWorld = (world) => {
    if (world !== null) {
        while (world.joints.length > 0) {
          world.DestroyJoint(world.joints[0]);
        }
    
        while (world.bodies.length > 0) {
          world.DestroyBody(world.bodies[0]);
        }
    
        while (world.particleSystems.length > 0) {
          world.DestroyParticleSystem(world.particleSystems[0]);
        }
      }
}

export default function BlobField({ scale = 20}) {
    const svgEl = useRef(null); 

    useEffect(() => {
        const world = new b2World(new b2Vec2(0, 5));
        window.world = world;
        resetWorld(world);
        createElasticParticles({ world, scale });
        const renderer = new Renderer(world, svgEl.current, { scale });
        renderer.draw();
        window.setInterval(() => {
          world.Step(1.0 / 30.0, 5, 3);
          renderer.draw();
        }, 1000/60);
    }, []);

    return (
        <div>
          <svg width={800} height={600}>
            <g ref={svgEl} style={{ transform: 'scale(1)' }}/>
          </svg>
        </div>
    )

}