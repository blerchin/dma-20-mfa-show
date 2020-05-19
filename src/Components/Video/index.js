import React from 'react';

import {
  container,
  cap,
  fullHeight,
} from './style.module.css';

const Video = ({
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
      <video crossOrigin="anonymous" controls style={style}>
        <source src={src} />
      </video>
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

export default Video;
