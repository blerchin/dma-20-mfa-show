import React from 'react';
import PropTypes from 'prop-types';
import {
  partialWidth,
} from './style.module.scss';

const Spacer = ({ isPartialWidth = false, margin = 20, children, style }) => {
  return (
    <div className={`${isPartialWidth ? partialWidth : ""}`} style={{ paddingBottom: margin, paddingTop: margin, overflow: 'hidden', ...style }}>
      { children }
    </div>
  );
};

Spacer.propTypes = {
  bottom: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  style: PropTypes.object
};

export default Spacer;