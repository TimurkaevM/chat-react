import React from 'react';

import style from './style.module.css';

function Questionnaire(props) {
  return (
    <div className={style.main}>
      <div className={style['main-outside']}>
        <div className={style.content}>
          {/* user */}
          <div className={style.user}>
            <div className={style['user-avatar']}>K</div>
            <div className={style['user-name']}>Кудузов</div>
            <div className={style['user-email']}>@sddsasd</div>
            <div className={style['user-icons']}>
              <div className={style['user-icon']}>
                <div className="material-icons">local_phone</div>
              </div>
              <div className={style['user-icon']}>
                <div className="material-icons">videocam</div>
              </div>
              <div className={style['user-icon']}>
                <div className="material-icons">local_post_office</div>
              </div>
            </div>
          </div>

          {/* social */}
          <div className={style.social}>
            <div className={style['social-title']}>Social</div>
            <div className={style['social-block']}>
              <div className={style['social-item']}>
                <div className={`material-icons ${style['social-icon']}`}>
                  local_phone
                </div>
                <div className={style.text}>kuduzow</div>
              </div>
              <div className={style['social-item']}>
                <div className={`material-icons ${style['social-icon']}`}>
                  local_phone
                </div>
                <div className={style.text}>kuduzow</div>
              </div>
              <div className={style['social-item']}>
                <div className={`material-icons ${style['social-icon']}`}>
                  local_phone
                </div>
                <div className={style.text}>kuduzow</div>
              </div>
            </div>
          </div>

          {/* media */}
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
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;
