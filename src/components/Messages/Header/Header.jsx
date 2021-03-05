import React from 'react';
import UserName from './UserName';
import style from '../style.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MessageSearch from './MessageSearch';

function Header(props) {
  const params = useParams().id;

  const profileName = useSelector((state) =>
    state.contacts.items.find((i) => {
      return params === i._id;
    }),
  );
  return (
    <div className={style.header}>
      <div className={style.header_search}>
        <MessageSearch />
      </div>
      <UserName
        profileName={profileName?.fullname}
        online={profileName?.online}
      />
      <div className={style.profile}>
        <i className="material-icons click">person</i>
      </div>
    </div>
  );
}

export default Header;
