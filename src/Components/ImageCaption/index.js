import React from 'react';

import style from './style.module.scss';

export default ({ title, year, materials }) => (
  <div className={style.caption}>
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