import React from 'react';

import {
  container,
  headerArtist,
  headerTitle,
  headerMaterials,
  headerLink,
} from './style.module.css';

const ProjectHeader = ({artistName, title, materials, link}) => (
  <section className={container}>
    <h3 className={headerArtist}>{artistName}</h3>
    <h2 className={headerTitle}>{title}</h2>
    <div className={headerMaterials}>{materials}</div>
    <div className={headerLink}>
      <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
    </div>
  </section>
);

export default ProjectHeader;
