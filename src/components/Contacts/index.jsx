import React, { useEffect } from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../redux/contacts';
import Contact from './Contact';
import Form from './Form';

function Contacts() {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  useEffect(() => {
    dispatch(loadContacts());
  }, []);

  const filteredContacts = contacts.filter((contact) => {
    return contact.fullname.indexOf(filter) > -1;
  });

  const scrollContacts = document.getElementById('contacts');

  scrollContacts.scroll.top = scrollContacts.Height;

  return (
    <div className={style.contacts} id="contacts">
      <Form />
      {filteredContacts.map((contact) => {
        return <Contact key={contact._id} contact={contact} />;
      })}
    </div>
  );
}

export default Contacts;
