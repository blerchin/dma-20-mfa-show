import React from 'react';
import ProjectColumns, { Column } from "src/Components/ProjectColumns";

import { container } from "./style.module.scss";

const NotFound = () => (
  <ProjectColumns>
    <Column className={container}>
      <h1>404: NNOT FFOUND</h1>
    </Column>
  </ProjectColumns>
);

export default NotFound;