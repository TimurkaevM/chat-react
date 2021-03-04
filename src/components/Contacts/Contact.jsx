import React from 'react';
import style from './style.module.css';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';

function Contact(props) {
  return (
    <NavLink
      to={`/${props.contact._id}`}
      className={style.contact}
      activeClassName={style.activeContact}
    >
      <div className={style.circle}>
        {props.contact.fullname[0]}
        {props.contact.online === true ? (
          <div className={style.greenCircle}></div>
        ) : (
          ''
        )}
      </div>
      <div>
        {props.contact.fullname}
        <div>
          {props.contact.lastMessage === undefined
            ? ''
            : props.contact.lastMessage.content}
        </div>
      </div>
    </NavLink>
  );
}

export default Contact;
