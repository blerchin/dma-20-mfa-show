import React from 'react';
import PropTypes from 'prop-types';

const ProjectDescription = ({ children, title = "Project Description" }) => (
  <>
    <h3 className="sr-only">{ title }</h3>
    { children }
  </>
);

ProjectDescription.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default ProjectDescription;