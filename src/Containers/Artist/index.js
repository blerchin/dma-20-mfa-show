import React from 'react';

import ScrollIndicator from 'src/Components/ScrollIndicator';

import {
  container
} from './style.module.scss'


const Artist = ({ children, scrollIndicator=true}) => {
  return (
    <div className={container}>
      { scrollIndicator && <ScrollIndicator /> }
      {children}
    </div>
  );
}


export default Artist;
