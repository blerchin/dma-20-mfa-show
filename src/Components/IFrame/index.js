import React from 'react';

import {
  container,
  frame
} from './style.module.css';

const IFrame = ({
  url,
  title = 'iframeContent',
  frameBorder = 0,
  className = '',
  ...props
}) => {
  return (
    <div className={`${container} ${className}`}>
      <iframe
        src={url}
        className={frame}
        title={title}
        frameBorder={frameBorder}
        {...props}
      ></iframe>
    </div>
  );
}

export default IFrame;
