import React from 'react';

import {
  container,
  frame
} from './style.module.css';

const IFrame = ({
  url,
  title = 'iframeContent',
  frameBorder = 0,
}) => {
  return (
    <div className={container}>
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
