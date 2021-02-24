import React from 'react';
import style from './style.module.css';

function Contact(props) {
  return <li className={style.contact}>{props.contact.fullname}</li>;
}

export default Contact;
