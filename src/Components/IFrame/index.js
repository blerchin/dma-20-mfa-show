import React, { useState } from 'react';

import {
  container,
  frame,
  poster as posterClass,
  title as titleClass,
  open
} from './style.module.css';

const IFrame = ({
  url,
  title = 'iframeContent',
  frameBorder = 0,
  poster = null,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(!poster);

  return (
    <div className={`${container} ${className}`}>
      {poster && <img 
        alt={title}
        className={`${posterClass} ${isOpen ? open : ''}`}
        onClick={() => setIsOpen(true) } 
        src={poster.src}
        srcSet={poster.srcSet}
      />}
      {poster && <button
        className={`${titleClass} ${isOpen ? open : ''}`}
        onClick={() => setIsOpen(true)}>{title}
      </button>}
      <iframe
        src={url}
        className={frame}
        title={title}
        frameBorder={frameBorder}
        style={{ display: isOpen ? 'block' : 'none'}}
        {...props}
      ></iframe>
    </div>
  );
}

export default IFrame;
