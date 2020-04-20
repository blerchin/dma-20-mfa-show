import React, { useEffect, useRef, useState } from 'react';
import config from 'src/config';
import { render as renderLSys } from 'src/lsystems';
import { animation, textPath, wrapper } from './style.module.css';

const MAX_ANGLE = 90;

const getAngleAndXOffset = (amtScrolled) => {
  const scrollStop = .9;
  const angleComponent = Math.min(1, amtScrolled / scrollStop);
  const xOffsetComponent = Math.max(0, amtScrolled - scrollStop) / (1 - scrollStop) ;
  const angle = (angleComponent * -1 * MAX_ANGLE) + MAX_ANGLE ;
  const xOffset = xOffsetComponent * 1024;
  console.log(xOffsetComponent);
  return [angle, xOffset];
}
 
export default function Index() {
  const svgEl = useRef(null);
  const pathEl = useRef(null);
  const [amtScrolled, setAmtScrolled] = useState(0);
  const [wander, setWander] = useState(0);
  const [wanderDir, setWanderDir] = useState(1);
  const [dims, setDims] = useState([1000, 1000]);
  useEffect(() => {
    setDims([window.innerWidth, window.innerHeight]);
    const angle = getAngleAndXOffset(amtScrolled)[0] + wander;
    renderLSys(svgEl.current, pathEl.current, 7, angle, "F", "FX", "X=X+YF", "Y=FX-Y");
  }, [amtScrolled, wander]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const amt = 0.01 * wanderDir;
      if (wander >= 1) {
        setWanderDir(-1);
      } else if (wander <= 0) {
        setWanderDir(1);
      }
      setWander(wander + amt);
    }, 40);
    return () => window.clearInterval(interval);
  })
  
  useEffect(() => {
    const updateAmtScrolled = (evt) => setAmtScrolled(window.scrollY / (document.body.scrollHeight - window.innerHeight));
    window.addEventListener('scroll', updateAmtScrolled);
    return () => window.removeEventListener('scroll', updateAmtScrolled);
  })

  return (
     <div className={wrapper}>
        <svg className={animation} ref={svgEl}>
          <g className={textPath} style={{ transform: `rotate(90deg) translate(0, ${getAngleAndXOffset(amtScrolled)[1]}px)` }}>
            <path id="lsystem" fill="transparent" stroke="transparent" ref={pathEl} />
            <text width={dims[0]}>
              <textPath alignmentBaseline="middle" method="stretch" href="#lsystem" side="right">
                {config.artists.map(({ name }) => name).join(' | ')}
              </textPath>
            </text>
          </g>
         </svg>
         <noscript>
          <ul>
              { config.artists.map(({ name }) =>
              <li key={name}>{name}</li>
              )}
          </ul>
         </noscript>
    </div>
  );
}