import React from 'react';

import {
  container,
  header,
} from './style.module.scss';

const ArtistBio = ({children, className = ''}) => (
  <section className={`${container} ${className}`}>
    <h4 className={header}>Artist Bio</h4>
    <div>
      {children}
    </div>
  </section>
);

export default ArtistBio;
