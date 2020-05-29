import React from 'react';

import {
  container,
  headerArtist,
  headerTitle,
  headerMaterials,
  headerLink,
  fluid
} from './style.module.scss';

const ProjectHeader = ({artistName, title, materials, link, fluidLayout, className = ''}) => (
  <header className={`${container} ${className} ${fluidLayout ? fluid : ''}`}>
    <h2>
      <span className={headerArtist}>{artistName}</span>
      <span className={headerTitle}>{title}</span>
    </h2>
    <div className={headerMaterials}>
      {materials}
    </div>
    <div className={headerLink}>
      <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
    </div>
  </header>
);

export default ProjectHeader;
