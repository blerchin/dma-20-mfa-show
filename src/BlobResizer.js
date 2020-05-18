import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import BlobField from 'src/BlobField';
import { debounce } from 'src/utils';

const COLLAPSED_WIDTH = 100;
const WIDTH_ITER = 10

export default function({ collapsed, ...props }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const match = useRouteMatch();
  const resize = debounce(() => {
    //TODO make this work along the bottom on mobile
    const isCollapsed = !Boolean(match.isExact);
    if (isCollapsed && width > COLLAPSED_WIDTH) {
      setWidth(width - WIDTH_ITER);
      setHeight(window.innerHeight);
    } else if (isCollapsed) {
      setWidth(COLLAPSED_WIDTH);
      setHeight(window.innerHeight);
    } else if (width < window.innerWidth) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }  
  }, 1);
  useEffect(() => {
    resize();
  }, [width, height, match])
  
  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  },[]);
  return (
  <div style={{ height, width: window.innerWidth, backgroundColor: 'red'}}>
      <BlobField width={width} height={height} collapsed={collapsed} {...props} />
    </div>
  );
}