import React from 'react';
import PropTypes from 'prop-types';
import {
  halfWidth,
} from './style.module.scss';

const Spacer = ({ isHalfWidth = false, margin = 20, children, style }) => {
  return (
    <div className={`${isHalfWidth ? halfWidth : ""}`} style={{ paddingBottom: margin, paddingTop: margin, overflow: 'hidden', ...style }}>
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