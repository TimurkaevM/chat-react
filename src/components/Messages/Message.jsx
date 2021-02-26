import React from 'react';
import style from './style.module.css';

function Message(props) {
  return <div className={style.message}>{props.message.content}</div>;
}

export default Message;
