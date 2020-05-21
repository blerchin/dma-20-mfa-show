import React from 'react';

import {
  container,
} from './style.module.css';

const ProjectLink = ({href, text, className = ''}) => (
  <div className={`${container} ${className}`}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </div>
);

export default ProjectLink;
