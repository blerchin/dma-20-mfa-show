import React, { useRef, useState, useEffect } from 'react';
import { createElasticParticles, createCursor } from './particles';
import Renderer from './Renderer';
import config from 'src/config';

import { artistName, artistNameTag } from './style.module.scss';

const { b2AABB, b2_dynamicBody, b2BodyDef, b2MouseJointDef, b2Vec2, b2World } = liquidfun; 

class QueryCallback {
  constructor(point) {
    this.point = point;
    this.fixture = null;
  }
  
  ReportFixture(fixture) {
    var body = fixture.body;
    if (body.GetType() === b2_dynamicBody) {
      var inside = fixture.TestPoint(this.point);
      if (inside) {
        this.fixture = fixture;
        return true;
      }
    }
    return false;
  }
}

function resetWorld(world) {
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

const handleMouseDown = (world, scale, groundBody, mouseJoint) => (evt) => {
  const coords = new b2Vec2(evt.offsetX / scale, evt.offsetY / scale);
  const bb = new b2AABB();
  const affordance = new b2Vec2(0.01, 0.01);
  b2Vec2.Sub(bb.lowerBound, coords, affordance);
  b2Vec2.Add(bb.upperBound, coords, affordance);

  const queryCallback = new QueryCallback(coords);
  world.QueryAABB(queryCallback, bb);
  console.log(queryCallback);

  if (queryCallback.fixture) {
    const body = queryCallback.fixture.body;
    var md = new b2MouseJointDef();
    md.bodyA = groundBody;
    md.bodyB = body;
    md.target = coords;
    md.maxForce = 100 * body.GetMass();
    mouseJoint.current = world.CreateJoint(md);
    body.SetAwake(true);
  }
}

const handleMouseMove = (world, scale, mouseJoint) => (evt) => {
  if (mouseJoint) {
    const coords = new b2Vec2(evt.offsetX / scale, evt.offsetY / scale);
    mouseJoint.SetTarget(coords);
  }
}

const handleMouseUp = (world, mouseJoint) => (evt) => {
  if (mouseJoint) {
    world.DestroyJoint(mouseJoint.current);
    mouseJoint.current = null;
  }
}

export default function BlobField({ scale = 20}) {
    const animationEl = useRef(null); 
    const svgEl = useRef(null);
    const [groupLocations, setGroupLocations] = useState([]);

    useEffect(() => {
        const world = new b2World(new b2Vec2(0, 5));
        window.world = world;
        resetWorld(world);
        const gd = new b2BodyDef();
        const groundBody = world.CreateBody(gd);
        
        createElasticParticles({ world, scale, numBlobs: config.artists.length });
        const cursor = createCursor(world);
        var md = new b2MouseJointDef();
        md.bodyA = groundBody;
        md.bodyB = cursor;
        md.maxForce = 20 * cursor.GetMass();
        const mouseJoint = world.CreateJoint(md);
        cursor.SetAwake(true);
        
        const renderer = new Renderer(world, animationEl.current, { scale });
        renderer.draw();
        
        window.setInterval(() => {
          world.Step(1.0 / 60.0, 5, 3);
          renderer.draw();
          renderer.drawCursor(cursor);
          setGroupLocations(renderer.getGroupLocations());
        }, 1000/60);

        //El.current.addEventListener('mousedown', handleMouseDown(world, scale, groundBody, mouseJoint));
        svgEl.current.addEventListener('mousemove', handleMouseMove(world, scale, mouseJoint));
        //window.addEventListener('mouseup', handleMouseUp(world, mouseJoint));

    }, [scale]);

    return (
        <div>
          <svg ref={svgEl} width={800} height={600}>
            <defs>
              <radialGradient id="cursorGradient">
                <stop offset="0%" stop-color="#00ff3399" />
                <stop offset="100%" stop-color="#00ff3300" />
              </radialGradient>
            </defs>
            <g ref={animationEl} style={{ transform: 'scale(1)' }}/>
            {groupLocations.map(({ initialPoint }, i) => (
              <g key={`artist-${i}`}>
                <rect className={artistNameTag} x={initialPoint[0]} y={initialPoint[1]} width={120} height={20}></rect>
                <text className={artistName} x={initialPoint[0]} y={initialPoint[1] + 16} width={120}>
                    {config.artists[i].name.toUpperCase()}
                </text>
              </g>
             ))}
          </svg>
        </div>
    )

}