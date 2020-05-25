import React, { useEffect, useRef } from 'react';
import {
  Link,
} from "react-router-dom";


import {
  container,
} from './style.module.scss';

const Nav = () => {
  const navEl = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.pageYOffset;
      if (window.innerWidth < 768) {
        navEl.current.style.bottom = `${-1 * scrollY}px`;
      } else {
        navEl.current.style.bottom = 0;
      }
    }
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    }
  }, []);
  return (
    <nav className={container} ref={navEl}>
      <h2 className="sr-only" id='navLabel'>Navigation</h2>
      <ul aria-labelledby='navLabel'>
      <li><Link to="/info">Info</Link></li>
      <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
