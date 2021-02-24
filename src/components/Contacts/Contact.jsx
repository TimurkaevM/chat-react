import React from 'react';
import style from './style.module.css';
import { NavLink } from 'react-router-dom';

function Contact(props) {
  return (
    <li className={style.contact}>
      <NavLink to={`/${props.contact._id}`}>{props.contact.fullname}</NavLink>
    </li>
  );
}

export default Contact;
