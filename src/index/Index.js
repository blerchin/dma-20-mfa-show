import React, { useEffect, useRef, useState } from 'react';
import config from 'src/config';
import { examples, render as renderLSys } from 'src/lsystems';
 

export default function Index() {
  const canvasEl = useRef(null);
  const [angle, setAngle] = useState(0);
  const [angleUp, setAngleUp] = useState(true);
  const [dims, setDims] = useState([100, 100]);
  useEffect(() => {
    setDims([window.innerWidth, window.innerHeight]);
    renderLSys(canvasEl.current, 10, angle, "F", "FX", "X=X+YF", "Y=FX-Y");
  }, [angle]);
  useEffect(() => {
    const interval  = window.setInterval(() => {
        const newAngle = angleUp ? angle + 0.1 : angle - 0.1;
        if (newAngle > 60 || newAngle < 0 ) {
            setAngleUp(!angleUp);
        }
        setAngle(newAngle);
    }, 100);
    return () => window.clearInterval(interval);
  })

  return (
     <div>
        <canvas height={dims[1]} ref={canvasEl} width={dims[0]} />
        <ul>
            { config.artists.map(({ name }) =>
            <li key={name}>{name}</li>
            )}
        </ul>
    </div>
  );
}