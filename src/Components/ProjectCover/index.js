import React, { useEffect, useRef } from 'react';

import {
  container,
} from './style.module.scss';

const ProjectCover = ({fadeOut = false, children, className = ''}) => {
  let fadeLevel = 0;
  let animationId = null;
  const node = useRef(null);

  const step = () => {
    node.current.style.filter = `blur(${fadeLevel * 100}px)`;
    if (fadeOut) {
      node.current.style.opacity = `${1 - fadeLevel}`;
    }
  }

  const onScroll = (event) => {
    fadeLevel = Math.min(1, window.scrollY / window.innerHeight);
    animationId = requestAnimationFrame(step);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    step();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('scroll', onScroll);
    }
  });

  return (
    <div className={`${container} ${className}`} ref={node}>
      {children}
    </div>
  );
};

export default ProjectCover;
