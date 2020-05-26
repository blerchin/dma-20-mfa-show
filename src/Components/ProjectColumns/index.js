import React from 'react';

import {
  container,
  column,
  fullBleede,
} from './style.module.scss';

export const Column = ({ children, ...props }) => (
  <div className={column} {...props}>{children}</div>
);

const ProjectColumns = ({
  children,
  fullBleede: isFullBleede = false,
  className = '',
}) => (
  <section className={`${container} ${isFullBleede ? fullBleede : ''} ${className}`}>
    { children }
  </section>
);

export default ProjectColumns;
