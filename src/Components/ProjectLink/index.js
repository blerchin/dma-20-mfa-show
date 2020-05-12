import React from 'react';

import {
  container,
} from './style.module.css';

const ProjectLink = ({href, text}) => (
  <div className={container}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </div>
);

export default ProjectLink;
