import React, { useEffect, useRef, useState } from 'react';
import config from 'src/config';
import { examples, render as renderLSys } from 'src/lsystems';
import { animation, textPath, wrapper } from './style.module.css';

const MAX_ANGLE = 50;
 

export default function Index() {
  const svgEl = useRef(null);
  const pathEl = useRef(null);
  const [amtScrolled, setAmtScrolled] = useState(0);
  const [dims, setDims] = useState([1000, 1000]);
  useEffect(() => {
    setDims([window.innerWidth, window.innerHeight]);
    const angle = (amtScrolled * -1 * MAX_ANGLE) + MAX_ANGLE;
    console.log(angle);
    renderLSys(svgEl.current, pathEl.current, 15, angle, "F", "FX", "X=X+YF", "Y=FX-Y");
  }, [amtScrolled]);
  useEffect(() => {
    const updateAmtScrolled = (evt) => setAmtScrolled(window.scrollY / (document.body.scrollHeight - window.innerHeight));
    window.addEventListener('scroll', updateAmtScrolled);
    return () => window.removeEventListener('scroll', updateAmtScrolled);
  })

  return (
     <div className={wrapper}>
        <svg className={animation} ref={svgEl}>
          <g className={textPath}>
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