import React from 'react';

import style from './style.module.css';

function MediaPage(props) {
  return (
    <div className={style.media}>
      <div className={style['media-title']}>Media</div>
      <div className={style['media-block']}>
        <div className={style['media-item']}>
          <div className={`material-icons ${style['media-icon']}`}>
            local_phone
          </div>
          <div className={style.text}>kuduzow</div>
        </div>
      </div>
    </div>
  );
}

export default MediaPage;
