import React from 'react';
import {
  Link,
} from "react-router-dom";

import config from '../../config';

const ArtistNav = ({children}) => (
  <nav className="sr-only">
    <h2 id="navLabel">Artists</h2>
    <ul aria-labelledby="navLabel">
      {
        config.artists.map(({slug, name}) => {
          return (
            <li key={slug}><Link to={`/${slug}`}>{name}</Link></li>
          )
        })
      }
    </ul>
  </nav>
);

export default ArtistNav;
