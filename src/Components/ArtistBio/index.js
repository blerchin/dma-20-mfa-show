import React from 'react';

import {
  container,
  header,
} from './style.module.scss';

const ArtistBio = ({children, className = ''}) => (
  <section className={`${container} ${className}`}>
    <h3 className={header}>Artist Bio</h3>
    <div>
      {children}
    </div>
  </section>
);

export default ArtistBio;
