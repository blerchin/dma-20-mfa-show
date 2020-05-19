import React from 'react';

import {
  container,
  header,
} from './style.module.css';

const ArtistBio = ({children}) => (
  <section className={container}>
    <h4 className={header}>Artist Bio</h4>
    <div>
      {children}
    </div>
  </section>
);

export default ArtistBio;
