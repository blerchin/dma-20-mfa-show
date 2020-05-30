import React, { useEffect, useRef, useState } from 'react';

import {
  responsiveVimeo,
  vimeo,
  fullHeight
} from './style.module.scss';

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
  const container = useRef(null);
  const [height, setHeight] = useState(null);

  if (maxHeight !== "auto" && isFullHeight === false) {
    style.width = "auto";
  }

  useEffect(() => {
    const onResize = () => {
      if (!container.current) { return }
      const width = container.current.getBoundingClientRect().width;
      const height = parseFloat(padding) * .01 * width;
      console.log(width, height);
      setHeight(height);
    }
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  });

  return (
    <div 
    className={`${isFullHeight ? fullHeight : ""} ${responsiveVimeo} ${className}`}
    style={{ height: `${height}px` }}
    ref={container}
    >
      <iframe 
        src={url}
        className={vimeo}
        title="vimeo"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen=""
      >
      </iframe>
    </div>
  );
}

export default Vimeo;
