import React from 'react';

import {
  responsiveVimeo,
  vimeo,
  fullHeight
} from './style.module.css';

const Vimeo = ({
  url,
  className = "",
  padding = "56.25%",
  isFullHeight = "",
  maxHeight = "auto",
}) => {
  const style = {
    maxHeight,
  };

  if (maxHeight !== "auto" && isFullHeight === false) {
    style.width = "auto";
  }

  return (
    <div 
    className={`${isFullHeight ? fullHeight : ""} ${responsiveVimeo} ${className}`}
      style={{ 
        paddingBottom: `${padding}`
      }}
    >
      <iframe src={url} className={vimeo} title="vimeo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen=""></iframe>
    </div>
  );
}

export default Vimeo;
