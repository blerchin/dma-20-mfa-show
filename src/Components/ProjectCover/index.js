import React, { useEffect, useRef } from 'react';

import {
  container,
  shim,
  fluidLayoutItem
} from './style.module.scss';

export const CoverItem = ({ children, fluidLayout = false }) => {
  return (
    <div className={ fluidLayout ? fluidLayoutItem : '' }>
      { children }
    </div>
  );
}
const ProjectCover = ({fadeOut = true, fluidLayout = false, children, noShim = false, className = ''}) => {
  let fadeLevel = 0;
  let animationId = null;
  const node = useRef(null);

  const step = () => {
    node.current.style.filter = `blur(${fadeLevel * 100}px)`;
    node.current.style.zIndex = fadeLevel > 0 ? -1 : 0;
    if (fadeOut) {
      node.current.style.opacity = `${1 - fadeLevel}`;
    }
  }

  const onScroll = (event) => {
    if (fluidLayout) {
      fadeLevel = 1;
    } else {
      fadeLevel = Math.min(1, 2 * (window.scrollY / window.innerHeight));
      animationId = requestAnimationFrame(step);
    }
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
    <>
    {!noShim && <div className={shim}></div>}
    <div className={`${container} ${className}`} ref={node}>
      {children}
    </div>
    </>
  );
};

export default ProjectCover;
