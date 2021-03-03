import React from 'react';
import style from './style.module.css';
import { NavLink } from 'react-router-dom';

function Contact(props) {
  return (
    <NavLink
      to={`/${props.contact._id}`}
      className={style.contact}
      activeClassName={style.activeContact}
    >
      <i className={`${style.materialIcons} material-icons md-48`}>
        stop_circle
      </i>
      <div className={style.circle}>{props.contact.fullname[0]}</div>
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
