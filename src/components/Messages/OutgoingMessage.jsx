import React from 'react';
import style from './style.module.css';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

function OutgoingMessage({ message }) {
  return (
    <div className={style.message}>
      {message.content}
      <div className={style.date}>{dayjs(message.time).format('hh:mm')}</div>
    </div>
  );
}

OutgoingMessage.propType = {
  message: PropTypes.object,
};
export default OutgoingMessage;
