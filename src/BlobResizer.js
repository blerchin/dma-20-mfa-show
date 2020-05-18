import React, { useEffect, useState } from 'react';
import BlobField from 'src/BlobField';
import { debounce } from 'src/utils';

const COLLAPSED_SIZE = 100;
const SIZE_ITER = 5

export default function({ collapsed, ...props }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const resize = debounce(() => {
      const isVerticalLayout = window.innerWidth > window.innerHeight;
      if (collapsed && isVerticalLayout && width > COLLAPSED_SIZE) { 
        setWidth(width - SIZE_ITER);
        setHeight(window.innerHeight);
      } else if (collapsed && !isVerticalLayout && height > COLLAPSED_SIZE) {
        setWidth(window.innerWidth);
        setHeight(height - SIZE_ITER);
      } else if (collapsed) {
        setWidth(isVerticalLayout ? COLLAPSED_SIZE : window.innerWidth);
        setHeight(isVerticalLayout ? window.innerHeight : COLLAPSED_SIZE);
      } else if (width < window.innerWidth || height < window.innerHeight) {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }  
    }, 1);
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