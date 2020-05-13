import React from 'react';

import {
  container,
  column,
} from './style.module.css';

const ProjectColumns = ({
  columns,
}) => (
  <section className={container} style={{
    gridTemplateColumns: `repeat(${columns.length}, 1fr)`
  }}>
    {
      columns.map((col, idx) => <div key={idx} className={column}>{col}</div>)
    }
  </section>
);

export default ProjectColumns;
