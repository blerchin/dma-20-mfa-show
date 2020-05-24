import React from 'react';

import {
  container,
  headerArtist,
  headerTitle,
  headerMaterials,
  headerLink,
} from './style.module.css';

const ProjectHeader = ({artistName, title, materials, link, className = ''}) => (
  <header className={`${container} ${className}`}>
    <h2>
      <span className={headerArtist}>{artistName}</span> 
      <span className={headerTitle}>{title}</span>
    </h2>
    <div className={headerMaterials} dangerouslySetInnerHTML={{__html: materials}} />
    <div className={headerLink}>
      <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
    </div>
  </header>
);

export default ProjectHeader;
