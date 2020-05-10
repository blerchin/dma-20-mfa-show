import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import BlobField from 'src/BlobField';
import { debounce } from 'src/utils';

const COLLAPSED_HEIGHT = 50;

export default function() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  const match = useRouteMatch();
  const resize = debounce(() => {
    const isCollapsed = !Boolean(match.isExact);
    console.log(isCollapsed);
    if (isCollapsed && size[1] > COLLAPSED_HEIGHT) {
      setSize([window.innerWidth - 20, size[1] - 10]);
    } else if (isCollapsed) {
      setSize([window.innerWidth - 20, size[1]]);
    } else if (size[1] < window.innerHeight) {
      setSize([window.innerWidth - 20, size[1] + 10]);
    }
  }, 20);
  useEffect(() => {
    resize();
  }, [size, match])
  
  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  },[]);
  return (
    <BlobField width={size[0]} height={size[1]} scale={Math.sqrt(size[1] * 4)} />
  );
}