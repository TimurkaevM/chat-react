import React from 'react';
import style from './style.module.css';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Avatar from '../Avatar';
import PropTypes from 'prop-types';

function IncomingMessages({ message }) {
  const params = useParams().id;
  const avatar = useSelector((state) =>
    state.contacts.items.find((item) => {
      return params === item._id;
    }),
  );
  return (
    <div className={style.incoming_parent}>
      <div className={style.small_avatar}>
        <Avatar size="small">{avatar.fullname[0]}</Avatar>
      </div>
      <div className={style.incoming_messages}>
        {message.content}
        <div className={style.date}>{dayjs(message.time).format('hh:mm')}</div>
      </div>
    </div>
  );
}

IncomingMessages.propTypes = {
  message: PropTypes.object,
};

export default IncomingMessages;
