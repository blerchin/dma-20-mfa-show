import React from 'react';

import {
  container,
  headerArtist,
  headerTitle,
  headerMaterials,
  headerLink,
} from './style.module.css';

const ProjectHeader = ({artistName, title, materials, link, className = ''}) => (
  <div className={`${container} ${className}`}>
    <h3 className={headerArtist}>{artistName}</h3>
    <h2 className={headerTitle}>{title}</h2>
    <div className={headerMaterials} dangerouslySetInnerHTML={{__html: materials}} />
    <div className={headerLink}>
      <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
    </div>
  </div>
);

export default ProjectHeader;
