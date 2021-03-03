import React from 'react';

import style from './style.module.css';

function SocialErorPage() {
  return (
    <div className={style.social}>
      <div className={style['social-title']}>Social</div>
      <div className={style['social-block']}>
        <div className={style['social-item']}>
          <div className={style['social-icon']}>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
          <div className={style.text}>Not Found</div>
        </div>
        <div className={style['social-item']}>
          <div className={style['social-icon']}>
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </div>
          <div className={style.text}>Not Found</div>
        </div>
        <div className={style['social-item']}>
          <div className={style['social-icon']}>
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </div>
          <div className={style.text}>Not Found</div>
        </div>
      </div>
    </div>
  );
}

export default SocialErorPage;
