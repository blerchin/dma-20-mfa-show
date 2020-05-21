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
}) => {
  return (
    <div className={`${container} ${className}`}>
      <iframe
        src={url}
        className={frame}
        title={title}
        frameBorder={frameBorder}
      ></iframe>
    </div>
  );
}

export default IFrame;
