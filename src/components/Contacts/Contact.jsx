import React from 'react';
import style from './style.module.css';
import { NavLink } from 'react-router-dom';

function Contact(props) {
  return (
    <NavLink to={`/${props.contact._id}`} className={style.contact}>
      {props.contact.fullname}
    </NavLink>
  );
}

export default Contact;
