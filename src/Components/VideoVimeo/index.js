import React from 'react';

import {
  responsiveVimeo,
  vimeo
} from './style.module.css';

const Vimeo = ({
  url,
  className = '',
}) => {
  return (
    <div className={`${responsiveVimeo} ${className}`}>
      <iframe src={url} className={vimeo} title="vimeo" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen=""></iframe>
    </div>
  );
}

export default Vimeo;
