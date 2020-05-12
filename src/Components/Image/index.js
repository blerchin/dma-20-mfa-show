import React from 'react';
import PropTypes from 'prop-types';

import {
  container,
  cap,
  fullHeight,
} from './style.module.css';

const Image = ({
  src,
  alt,
  caption = false,
  fullHeight: isFullHeight = false,
  maxHeight = 'auto'
}) => {
  const style = {
    maxHeight,
  };

  if (maxHeight !== 'auto' && isFullHeight === false) {
    style.width = 'auto';
  }

  return (
    <div className={`${container} ${isFullHeight ? fullHeight : ''}`}>
      <img
        style={style}
        src={src}
        alt={alt}
      />
      {
        caption && (
          <div className={cap}>
            {caption}
          </div>
        )
      }
    </div>
  );
}

Image.defaultProps = {
  caption: '',
  fillViewport: false,
  maxHeight: 'auto',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  fillViewport: PropTypes.bool,
  maxHeight: PropTypes.string,
};

export default Image;
