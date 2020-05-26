import React, { useEffect, useRef } from 'react';

import {
  container,
  cap,
  fullHeight,
} from './style.module.css';

const Video = ({
  src,
  srcOgg,
  alt,
  autoPlay = false,
  caption = false,
  controls = true,
  fullHeight: isFullHeight = false,
  maxHeight = 'auto',
  className = '',
  style,
  ...props
}) => {
  if (maxHeight !== 'auto' && isFullHeight === false) {
    style.width = 'auto';
  }
  const videoStyle = {
    maxHeight,
    ...style
  };
  const videoEl = useRef(null);
  useEffect(() => {
    if (autoPlay && videoEl.current) {
      videoEl.current.play();
    }
  }, [autoPlay, videoEl]);

  return (
    <div className={`${container} ${isFullHeight ? fullHeight : ''} ${className}`}>
      <video 
        crossOrigin="anonymous"
        autoplay={autoPlay}
        controls={controls}
        style={videoStyle} 
        ref={videoEl}
        {...props}
      >
        <source src={src} type="video/mp4" />
        {srcOgg && <source src={srcOgg} type="video/ogg" />}
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
