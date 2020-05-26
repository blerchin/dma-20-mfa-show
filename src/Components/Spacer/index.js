import React from 'react';
import PropTypes from 'prop-types';

const Spacer = ({ margin = 20, children, style }) => {
  return (
    <div style={{ paddingBottom: margin, paddingTop: margin, overflow: 'hidden', ...style }}>
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