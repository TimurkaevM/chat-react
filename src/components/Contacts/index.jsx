import React, { useEffect } from 'react';

import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../redux/contacts';
import Contact from './Contact';

function Contacts() {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, []);

  return (
    <ul className={style.contacts}>
      {contacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}

export default Contacts;
