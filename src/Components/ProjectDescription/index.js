import React from 'react';
import PropTypes from 'react';

const ProjectDescription = ({ children, title = "Project Description" }) => (
  <>
    <h3 class="sr-only">{ title }</h3>
    { children }
  </>
);

ProjectDescription.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default ProjectDescription;