import React, { useEffect, useState } from 'react';

import { circle, container, overlay } from './style.module.scss';

export default () => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  useEffect(() => {
    const onMouseMove = (evt) => {
      setXPos(evt.clientX);
      setYPos(evt.clientY);
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);
  
  return (
    <div className={container}>
      <h2>NEARREST NEIGHBOR</h2>
      <p>The context cannot be ignored. In the midst of an utterly changed reality, and as perhaps uniquely suited to partake in the swift transition of so much of our lives to the internet, the 2020 UCLA DMA MFA cohort presents their thesis exhibition, NEARREST NEIGHBOR. Works ranging from sculpture, to projections, to immersive installations, incorporating various digital and mechanical techniques, have been re-imagined for an online exhibition opening on May 29th. With shifting sociality as a through line, Zeynep Abes, Graham Akins, Berfin Ataman, Clara Leivas, Ben Lerchin, Blaine O’Neill, Miles Peyton, Hirad Sab, Dalena Tran, and Leming Z/C present work that, when taken together, draws from increasingly more apparent tensions between embodied and mediated experience, synthetic personhood and its affect, digital and physical space, the animate and the non-animate. The exhibition   negotiates movement through landscapes as much as networks, as human, non-human, and the in-between.</p>
      <svg className={overlay} >
        <circle className={circle} cx={xPos} cy={yPos} r={100} />
      </svg>
    </div>
  );
}