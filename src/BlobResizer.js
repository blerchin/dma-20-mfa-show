import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import BlobField from 'src/BlobField';
import { debounce } from 'src/utils';

const COLLAPSED_HEIGHT = 100;

const getScale = (width, height) => Math.sqrt(width * height) / 15;

export default function() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const match = useRouteMatch();
  const resize = debounce(() => {
    const isCollapsed = !Boolean(match.isExact);
    if (isCollapsed && height > COLLAPSED_HEIGHT) {
      setWidth(window.innerWidth - 10);
      setHeight(height - 5);
    } else if (isCollapsed) {
      setWidth(window.innerWidth - 10);
      setHeight(height);
    } else if (height < window.innerHeight) {
      setWidth(window.innerWidth - 10);
      setHeight(height + 5);
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
    <BlobField width={width} height={height} scale={getScale(width, height)} />
  );
}