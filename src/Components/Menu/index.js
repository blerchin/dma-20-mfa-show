import React from 'react';

import {
  container,
} from './style.module.css';

const ArtistBio = ({children}) => (
  <nav className={container}>
    <h2 className='sr-only' id='menuLabel'>Menu</h2>
    <ul aria-labelledby='menuLabel'>
      <li>Home</li>
      <li>Info</li>
      <li>Chat</li>
    </ul>
  </nav>
);

export default ArtistBio;
