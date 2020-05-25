import React from 'react';
import {
  Link,
} from "react-router-dom";


import {
  container,
} from './style.module.scss';

const Nav = ({children}) => (
  <nav className={container}>
    <h2 className="sr-only" id='navLabel'>Navigation</h2>
    <ul aria-labelledby='navLabel'>
    <li><Link to="/info">Info</Link></li>
    <li><Link to="/">Home</Link></li>
    </ul>
  </nav>
);

export default Nav;
