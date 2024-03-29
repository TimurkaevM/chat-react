import React from 'react';
import style from './style.module.css';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import Avatar from '../Avatar';

function Contact(props) {
  return (
    <NavLink
      to={`/${props.contact._id}`}
      className={style.contact}
      activeClassName={style.activeContact}
    >
      <Avatar size="medium">
        {props.contact.fullname[0] === '' ? '' : props.contact.fullname[0]}
        {props.contact.online === true ? (
          <div className={style.greenCircle}></div>
        ) : (
          ''
        )}
      </Avatar>
      <div className={style.name}>
        {props.contact.fullname}
        <div className={style.lastMessage}>
          <span>
            {props.contact.lastMessage === true ? (
              <i className="material-icons">done_all</i>
            ) : (
              <i className={`material-icons ${style.done}`}>done</i>
            )}
          </span>
          <span className={style.lastMessageContent}>
            {props.contact.lastMessage === undefined
              ? ''
              : props.contact.lastMessage.content.slice(0, 8) + '...'}
          </span>
        </div>
      </div>
      <div>
        <div className={style.time}>
          {dayjs(props.contact.lastMessage?.time).format('HH : mm')}
        </div>
        <div className={style.ellipsis}>
          <i className="material-icons">more_horiz</i>
        </div>
      </div>
    </NavLink>
  );
}

export default Contact;
