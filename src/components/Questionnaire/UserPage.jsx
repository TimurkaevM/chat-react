import React from 'react';

import style from './style.module.css';

function UserPage(props) {
  return (
    <div className={style.user}>
      <div className={style['user-avatar']}>
        {props.user.fullname[0] === '' ? '' : props.user.fullname[0]}
      </div>
      <div className={style['user-name']}>
        {props.user.fullname === '' ? 'Not found' : props.user.fullname}
      </div>
      <div className={style['user-email']}>
        {props.user.username === '' ? 'Not found' : `@${props.user.username}`}
      </div>
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
  );
}

export default UserPage;
