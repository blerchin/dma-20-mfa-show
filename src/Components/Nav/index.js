import React from 'react';

import {
  container,
} from './style.module.css';

const Nav = ({children}) => (
  <nav className={container}>
    <h2 className='sr-only' id='navLabel'>Navigation</h2>
    <ul aria-labelledby='navLabel'>
      <li>Home</li>
      <li>Info</li>
      <li>Chat</li>
    </ul>
  </nav>
);

export default Nav;
