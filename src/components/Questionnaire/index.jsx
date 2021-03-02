import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserPage from './UserPage';
import SocialPage from './SocialPage';
import MediaPage from './MediaPage';
import SocialErorPage from './SocialErorPage';

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
          <UserPage user={userFinded} />
          {userFinded.socials === undefined ? (
            <SocialErorPage />
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
