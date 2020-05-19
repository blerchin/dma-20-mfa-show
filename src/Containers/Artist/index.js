import React, { Component } from 'react';

import Nav from '../../Components/Nav';
import ProjectHeader from '../../Components/ProjectHeader';

const Artist = ({
  children,
  name,
  title,
  materials,
  link
}) => {
  return (
    <div className="artist">
      <Nav />
      <ProjectHeader
          artistName={name}
          title={title}
          materials={materials}
          link={link}
      />
      <div className="artistContent">
        {children}
      </div>
    </div>
  );
}


export default Artist;
