import React, { useEffect, useState } from 'react';
import BlobField from 'src/BlobField';
import { debounce } from 'src/utils';

const COLLAPSED_WIDTH = 100;
const WIDTH_ITER = 10

export default function({ collapsed, ...props }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const resize = debounce(() => {
    if (collapsed && width > COLLAPSED_WIDTH) {
      setWidth(width - WIDTH_ITER);
      setHeight(window.innerHeight);
    } else if (collapsed) {
      setWidth(COLLAPSED_WIDTH);
      setHeight(window.innerHeight);
    } else if (width < window.innerWidth) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }  
  }, 1);
  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [width, height, collapsed])
  
  return (
  <div style={{ height, width: window.innerWidth }}>
    <BlobField width={width} height={height} collapsed={collapsed} {...props} />
  </div>
  );
}