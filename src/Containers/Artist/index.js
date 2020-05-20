import React from 'react';

import Nav from '../../Components/Nav';

import {
  container,
} from './style.module.css'

const Artist = ({
  children,}) => {
  return (
    <div className={container}>
      <Nav />
      {children}
    </div>
  );
}


export default Artist;
