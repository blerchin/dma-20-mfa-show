import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  createParticleSystem,
  createMouseJoint,
  createBounds,
  createCursor,
  moveBounds,
  createBlobs 
} from './particles';
import Renderer from './Renderer';
import config from 'src/config';

import { wrapper } from './style.module.scss';

const { b2Vec2, b2World } = liquidfun;

export default function BlobField({
  height = window.innerHeight,
  positionIterations = 2,
  velocityIterations = 4,
  gravity = 2,
  scale = 80,
  width = window.innerWidth,
  particleRadius = 0.3
}) {
    const animationEl = useRef(null);
    const wrapperEl = useRef(null);
    const bounds = useRef(null);
    const history = useHistory();
    const [groupLocations, setGroupLocations] = useState([]);
    //const getScale = () => Math.sqrt(width * height) / config.artists.length * initialScale / 70;
    const getScale = () => scale;

    useEffect(() => {
        const world = new b2World(new b2Vec2(0, gravity));
        //this is sad, but unfortunately required by liquidfun
        window.world = world;
        const scale = getScale();

        bounds.current = createBounds({ world, scale, width, height });
        moveBounds({ bounds: bounds.current, width, height, scale });
        const particleSystem = createParticleSystem(world, particleRadius);

        const cursor = createCursor(world, {radius: 0.5});
        const mouseJoint = createMouseJoint(world, cursor, 150 * cursor.GetMass());

        const renderer = new Renderer(
          world, animationEl.current, particleSystem, config.artists, {scale, radius: particleRadius }
          );

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

        const handleMouseDown = (evt) => {
          const activeBlob = renderer.hitTest(evt.offsetX, evt.offsetY);
          if(activeBlob) {
            history.push(`/${activeBlob.slug}`);
          }
        };
        const handleMouseMove = (evt) => {
          const coords = new b2Vec2(evt.offsetX / scale, evt.offsetY / scale);
          if (mouseJoint) {
            mouseJoint.SetTarget(coords);
          }
          const activeBlob = renderer.hitTest(evt.offsetX, evt.offsetY);
          if (activeBlob) {
            wrapperEl.current.style.cursor = 'pointer';
          } else {
            wrapperEl.current.style.cursor = 'default';
          }
        };
        
        wrapperEl.current.addEventListener('mousedown', handleMouseDown);
        wrapperEl.current.addEventListener('mousemove', handleMouseMove);
        
        return () => {
          shouldRender = false; 
          wrapperEl.current.removeEventListener('mousedown', handleMouseDown);
          wrapperEl.current.removeEventListener('mousemove', handleMouseMove);
        }
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
