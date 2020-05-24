import React from 'react';
import {
  Link,
} from "react-router-dom";


import {
  container,
} from './style.module.css';

const Nav = ({children}) => (
  <nav className={container}>
    <h2 className="sr-only" id='navLabel'>Site Navigation</h2>
    <ul aria-labelledby='navLabel'>
    <li><Link to="/info">Info</Link></li>
      <li><Link to="/">Home</Link></li>
      {/* <li><Link to="/chat">Chat</Link></li> */}
    </ul>
  </nav>
);

export default Nav;
