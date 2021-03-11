import React from 'react';
import style from './style.module.css';
import dayjs from 'dayjs';

function IncomingMessages({ message }) {
  return (
    <div className={style.incoming_messages}>
      {message.content}
      <div className={style.date}>{dayjs(message.time).format('hh:mm')}</div>
    </div>
  );
}

export default IncomingMessages;
