import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import style from './style.module.css';

function Questionnaire(props) {
  const id = useParams().id;
  const users = useSelector((state) => state.contacts.items);
  const userFinded = users.find((user) => id === user._id);
  console.log(userFinded);

  if (userFinded === undefined) {
    return <div></div>;
  }

  return (
    <div className={style.main}>
      <div className={style['main-outside']}>
        <div className={style.content}>
          {/* user */}
          <div className={style.user}>
            <div className={style['user-avatar']}>{userFinded.fullname[0]}</div>
            <div className={style['user-name']}>{userFinded.fullname}</div>
            <div className={style['user-email']}>@{userFinded.username}</div>
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
                <div className={style['social-icon']}>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
                <div className={style.text}>{userFinded.socials.instagram}</div>
              </div>
              <div className={style['social-item']}>
                <div className={style['social-icon']}>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </div>
                <div className={style.text}>{userFinded.socials.twitter}</div>
              </div>
              <div className={style['social-item']}>
                <div className={style['social-icon']}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className={style.text}>{userFinded.socials.facebook}</div>
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
