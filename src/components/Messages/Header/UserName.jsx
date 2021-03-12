import React from 'react';
import style from '../style.module.css';
import PropTypes from 'prop-types';

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

UserName.propTypes = {
  profileName: PropTypes.string,
  online: PropTypes.bool,
};

export default UserName;
