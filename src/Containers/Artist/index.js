import React from 'react';

import {
  container
} from './style.module.scss'

const Artist = ({ children,}) => {
  return (
    <div className={container}>
      {children}
    </div>
  );
}


export default Artist;
