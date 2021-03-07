import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserPage from './UserPage';
import SocialPage from './SocialPage';
import MediaPage from './MediaPage';
import SocialErrorPage from './SocialErrorPage';

import style from './style.module.css';

function Questionnaire(props) {
  const id = useParams().id;
  const users = useSelector((state) => state.contacts.items);
  const open = useSelector((state) => state.application.open);
  const userFinded = users.find((user) => id === user._id);

  if (userFinded === undefined) {
    return null;
  }

  return (
    <div className={`${style.main} ${open ? style.open : ''}`}>
      <div className={style['main-outside']}>
        <div className={style.content}>
          <UserPage user={userFinded} />
          {userFinded.socials === undefined ? (
            <SocialErrorPage />
          ) : (
            <SocialPage user={userFinded} />
          )}
          <MediaPage user={userFinded} />
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;
