import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  container,
  cap,
  fullHeight,
} from './style.module.css';

const Image = ({
  img,
  alt,
  caption = false,
  fullHeight: isFullHeight = false,
  maxHeight = 'auto'
}) => {
  const style = {
    maxHeight,
  };

  const [showBG, setShowBG] = useState(true);

  if (maxHeight !== 'auto' && isFullHeight === false) {
    style.width = 'auto';
  }

  return (
      <div className={`${container} ${isFullHeight ? fullHeight : ''}`} style={{
        backgroundSize: 'cover',
        backgroundImage: showBG ? 'url("' + img.placeholder + '")' : 'none'
      }}>
        <img
          style={style}
          src={img.src}
          srcSet={img.srcSet}
          onLoad={() => setShowBG(false)}
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
  img: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  fillViewport: PropTypes.bool,
  maxHeight: PropTypes.string,
};

export default Image;