import React from 'react';

import style from './style.module.css';

function MediaPage(props) {
  return (
    <div className={style.media}>
      <div className={style['media-title']}>Media</div>
      <div className={style['media-block']}>
        <div className={style['media-item']}>
          <div className={style['media-icon']}></div>
          <div className={style.text}>filename.pdf</div>
        </div>
      </div>
    </div>
  );
}

export default MediaPage;
