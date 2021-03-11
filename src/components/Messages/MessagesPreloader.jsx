import React from 'react';
import style from './style.module.css';

function MessagesPreloader(props) {
  return (
    <div className={style.preloader}>
      <div className={style.no_chat_selected}>
        Please, select a chat to start messaging
      </div>
    </div>
  );
}

export default MessagesPreloader;
