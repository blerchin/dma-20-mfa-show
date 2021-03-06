import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';

const ImageCaption = ({ title, year, materials, ...props }) => (
  <div className={style.caption} {...props}>
    <h4 className={style.title}>
      {title}
      {year ? 
        <span className={style.year}>{`, ${year}`}</span> 
        : ''
      }
    </h4>
    <p className={style.materials}>{materials}</p>
  </div>
)

ImageCaption.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  materials: PropTypes.string
}

export default ImageCaption