import React from 'react';

import {
  container,
  noCoverContainer,
} from './style.module.scss'

const Artist = ({
  noCover, children,}) => {
  return (
    <div className={`${container} ${noCover ?  noCoverContainer : ""}`}>
      {children}
    </div>
  );
}


export default Artist;
