import React from 'react';

import {
  container,
  column,
  fullBleede,
} from './style.module.css';

export const Column = ({ children, ...props }) => (
  <div className={column} {...props}>{children}</div>
);

const ProjectColumns = ({
  children,
  fullBleede: isFullBleede = false,
}) => (
  <section className={`${container} ${isFullBleede ? fullBleede : ''}`} style={{
    gridTemplateColumns: `repeat(${React.Children.count(children)}, 1fr)`
  }}>
    { children }
  </section>
);

export default ProjectColumns;
