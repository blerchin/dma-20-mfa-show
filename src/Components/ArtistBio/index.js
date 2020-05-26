import React from 'react';

import {
  container,
  columnContainer,
  header,
} from './style.module.scss';

const ArtistBio = ({children, className = '', inColumn = ''}) => (
  <section className={`${container} ${className} ${inColumn ? columnContainer : ""}`}>
    <h3 className={header}>Artist Bio</h3>
    <div>
      {children}
    </div>
  </section>
);

export default ArtistBio;
