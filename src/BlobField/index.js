import React, { useRef, useState, useEffect } from 'react';
import { createParticleSystem, createBlob, createBounds, createCursor, moveBounds } from './particles';
import Renderer from './Renderer';
import config from 'src/config';

import { artistName, artistNameTag, wrapper } from './style.module.scss';

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

export default function BlobField({
  height = window.innerHeight,
  positionIterations = 3,
  velocityIterations = 5,
  gravity = 5,
  initialScale = 50,
  width = window.innerWidth,
  particleRadius = 0.25
}) {
    const animationEl = useRef(null);
    const wrapperEl = useRef(null);
    const svgEl = useRef(null);
    const bounds = useRef(null);
    const [groupLocations, setGroupLocations] = useState([]);
    //const getScale = () => Math.sqrt(width * height) / config.artists.length * initialScale / 70;
    const getScale = () => 50;

    useEffect(() => {
        const world = new b2World(new b2Vec2(0, gravity));
        window.world = world;
        resetWorld(world);
        const gd = new b2BodyDef();
        const groundBody = world.CreateBody(gd);
        const scale = getScale();

        bounds.current = createBounds({ world, scale, width, height });
        moveBounds({ bounds: bounds.current, width, height, scale });
        const particleSystem = createParticleSystem(world, particleRadius);

        const cursor = createCursor(world);
        var md = new b2MouseJointDef();
        md.bodyA = groundBody;
        md.bodyB = cursor;
        md.maxForce = 150 * cursor.GetMass();
        const mouseJoint = world.CreateJoint(md);
        cursor.SetAwake(true);

        const renderer = new Renderer(world, animationEl.current, { scale, radius: particleRadius });

        let shouldRender = true;

        var spawnRowLen = 5;
        var spawnColLen = 2
        var col = 0;

        //Use height and magic number to scale blobs
        var blobSize = height / 350;
        console.log(blobSize);

        config.artists.forEach((_, i) =>
          createBlob({
            particleSystem,
            x: (((i % spawnRowLen) / spawnRowLen) * (width*.8)),
            y:  (Math.floor(i / spawnRowLen) * (height*.8)/(spawnColLen+1)),
            radius: blobSize,
            width,
            scale
          }));
        const render = () => {
          if (!shouldRender) {
            return;
          }
          world.Step(1.0 / 40.0, velocityIterations, positionIterations);
          requestAnimationFrame(() => {
            renderer.draw(getScale());
            render();
          });
          setGroupLocations(renderer.getGroupLocations());
        };
        render();

        //El.current.addEventListener('mousedown', handleMouseDown(world, scale, groundBody, mouseJoint));
        wrapperEl.current.addEventListener('mousemove', handleMouseMove(world, getScale(), mouseJoint));
        //window.addEventListener('mouseup', handleMouseUp(world, mouseJoint));

        return () => { shouldRender = false; }

    }, []);

    useEffect(() => {
      bounds.current && moveBounds({ bounds: bounds.current, width, height, scale: getScale() });

    }, [width, height]);

    return (
        <div className={wrapper} ref={wrapperEl} style={{ width, height }}>
          <canvas ref={animationEl} width={width} height={height} />
          <svg ref={svgEl} width={width} height={height}>
            <defs>
              <radialGradient id="cursorGradient">
                <stop offset="0%" stopColor="#00ff3399" />
                <stop offset="100%" stopColor="#00ff3300" />
              </radialGradient>
            </defs>
            {groupLocations.map(({ initialPoint }, i) => (
              <g key={`artist-${i}`}>
                <rect className={artistNameTag} x={initialPoint[0]} y={initialPoint[1]} width={120} height={20}></rect>
                <text className={artistName} x={initialPoint[0]} y={initialPoint[1] + 16} width={120}>
                    {config.artists[i] && config.artists[i].name.toUpperCase()}
                </text>
              </g>
             ))}
          </svg>
        </div>
    )

}
