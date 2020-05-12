import React from 'react';

import {
  container,
} from './style.module.css';

const ArtistBio = ({children}) => (
  <section className={container}>
    <h4>Artist Bio</h4>
    <div>
      {children}
    </div>
  </section>
);

export default ArtistBio;
