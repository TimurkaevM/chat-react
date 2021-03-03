import React from 'react';
import style from './style.module.css';

function IncomingMessages({ message }) {
  return <div className={style.incoming_messages}>{message.content}</div>;
}

export default IncomingMessages;
