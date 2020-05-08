import React, { useRef, useState, useEffect } from 'react';
import {
  createParticleSystem,
  createMouseJoint,
  createBounds,
  createCursor,
  moveBounds,
  createBlobs 
} from './particles';
import { hitTest } from './hitTest';
import Renderer from './Renderer';
import config from 'src/config';

import { wrapper } from './style.module.scss';

const { b2BodyDef, b2MouseJointDef, b2Vec2, b2World } = liquidfun;


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
  gravity = 1,
  initialScale = 50,
  width = window.innerWidth,
  particleRadius = 0.25
}) {
    const animationEl = useRef(null);
    const wrapperEl = useRef(null);
    const bounds = useRef(null);
    const [groupLocations, setGroupLocations] = useState([]);
    //const getScale = () => Math.sqrt(width * height) / config.artists.length * initialScale / 70;
    const getScale = () => 50;

    useEffect(() => {
        const world = new b2World(new b2Vec2(gravity, 0));
        //this is sad, but unfortunately required by liquidfun
        window.world = world;
        const scale = getScale();

        bounds.current = createBounds({ world, scale, width, height });
        moveBounds({ bounds: bounds.current, width, height, scale });
        const particleSystem = createParticleSystem(world, particleRadius);

        const cursor = createCursor(world);
        const mouseJoint = createMouseJoint(world, cursor, 150 * cursor.GetMass());

        const renderer = new Renderer(world, animationEl.current, particleSystem, { scale, radius: particleRadius });

        let shouldRender = true;
        let iter = 0;

        const render = () => {
          if (!shouldRender) { return; }
          //wait for bounds to move into position first
          if (iter === 2) {
            createBlobs({
              artists: config.artists,
              height,
              particleSystem,
              scale,
              width
            });
          }
          iter = iter <= 2 ? iter + 1 : iter;
          world.Step(1.0 / 30.0, velocityIterations, positionIterations);
          requestAnimationFrame(() => {
            renderer.draw(getScale());
            render();
          });
          //setGroupLocations(renderer.getGroupLocations());
        };
        render();

        wrapperEl.current.addEventListener('mousedown', (evt) => {
          const coords = new b2Vec2(evt.offsetX / scale, evt.offsetY / scale);
          const body = hitTest(world, coords);

          if (body) {
            //mouseJoint.current = createMouseJoint(world, body);
          }
        });
        wrapperEl.current.addEventListener('mousemove', handleMouseMove(world, getScale(), mouseJoint));
        //window.addEventListener('mouseup', handleMouseUp(world, mouseJoint));

        return () => { shouldRender = false; }

    }, []);

    useEffect(() => {
      bounds.current && moveBounds({ bounds: bounds.current, width, height, scale: getScale() });
    }, [width, height]);

    return (
        <div className={wrapper} ref={wrapperEl} style={{ width, height }}>
          <canvas ref={animationEl} width={width} height={height} hidpi="off" resize="true" />
        </div>
    )

}
