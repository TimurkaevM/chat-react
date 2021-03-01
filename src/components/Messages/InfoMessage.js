import React from 'react';
import style from './style.module.css';

function InfoMessage({ message }) {
  return <div className={style.info_messages}>{message.content}</div>;
}

export default InfoMessage;
