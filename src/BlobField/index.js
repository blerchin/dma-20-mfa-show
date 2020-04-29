import React, { useRef, useState, useEffect } from 'react';
import createElasticParticles from './createElasticParticles';
import Renderer from './Renderer';
import config from 'src/config';

import { artistName, artistNameTag } from './style.module.css';

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
    const [groupLocations, setGroupLocations] = useState([]);

    useEffect(() => {
        const world = new b2World(new b2Vec2(0, 5));
        window.world = world;
        resetWorld(world);
        createElasticParticles({ world, scale, numBlobs: config.artists.length });
        const renderer = new Renderer(world, svgEl.current, { scale });
        renderer.draw();
        window.setInterval(() => {
          world.Step(1.0 / 60.0, 5, 3);
          renderer.draw();
          setGroupLocations(renderer.getGroupLocations());
        }, 1000/60);
    }, [scale]);

    return (
        <div>
          <svg width={800} height={600}>
            <g ref={svgEl} style={{ transform: 'scale(1)' }}/>
            {groupLocations.map(({ initialPoint }, i) => (
              <g key={`artist-${i}`}>
                <rect className={artistNameTag} x={initialPoint[0]} y={initialPoint[1]} width={120} height={20}></rect>
                <text className={artistName} x={initialPoint[0]} y={initialPoint[1]+16} width={120}>
                    {config.artists[i].name.toUpperCase()}
                </text>
              </g>
             ))}
          </svg>
        </div>
    )

}