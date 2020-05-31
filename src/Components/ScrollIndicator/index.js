import React, { useEffect, useState } from 'react';

import { scrollIndicator } from './style.module.scss';

const ScrollIndicator = () => {
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const onScroll = () => {
      setOpacity(Math.max(0, 1 - window.scrollY / window.innerHeight));
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  const scrollDown = () => {
    if('scrollBy' in window) {
      window.scrollBy({
        top: window.innerHeight / 2,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  return (
    <button className={scrollIndicator} style={{ opacity: opacity }} onClick={scrollDown}>
      <span>»</span>
    </button>
  );
}

export default ScrollIndicator;