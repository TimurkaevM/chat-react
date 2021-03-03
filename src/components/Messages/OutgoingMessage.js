import React from 'react';
import style from './style.module.css';

function OutgoingMessage({ message }) {
  console.log(message);
  return <div className={style.message}>{message.content}</div>;
}

export default OutgoingMessage;
