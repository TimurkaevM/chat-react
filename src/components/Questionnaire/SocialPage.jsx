import React from 'react';

import style from './style.module.css';

function SocialPage(props) {
  return (
    <div className={style.social}>
      <div className={style['social-title']}>Social</div>
      <div className={style['social-block']}>
        {props.user.socials.instagram === undefined ? null : (
          <div className={style['social-item']}>
            <div className={style['social-icon']}>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div className={style.text}>{props.user.socials.instagram}</div>
          </div>
        )}
        {props.user.socials.twitter === undefined ? null : (
          <div className={style['social-item']}>
            <div className={style['social-icon']}>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <div className={style.text}>{props.user.socials.twitter}</div>
          </div>
        )}
        {props.user.socials.facebook === undefined ? null : (
          <div className={style['social-item']}>
            <div className={style['social-icon']}>
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
            </div>
            <div className={style.text}>{props.user.socials.facebook}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SocialPage;
