import React from 'react';
import style from '../style.module.css';
function UserName({ profileName, online }) {
  return (
    <div className={style.header_name}>
      <div className={style.name}>
        {profileName}
        {online ? <div className={style.green}></div> : ''}
      </div>
    </div>
  );
}

export default UserName;
