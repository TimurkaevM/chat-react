import React from 'react';
import UserName from './UserName';
import style from '../style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MessageSearch from './MessageSearch';
import { openQuestionnaire } from '../../../redux/application';

function Header(props) {
  const params = useParams().id;
  const dispatch = useDispatch();

  const profileName = useSelector((state) =>
    state.contacts.items.find((i) => {
      return params === i._id;
    }),
  );

  const handleClick = () => {
    dispatch(openQuestionnaire());
  };
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
        <i className="material-icons click" onClick={handleClick}>
          person
        </i>
      </div>
    </div>
  );
}

export default Header;
