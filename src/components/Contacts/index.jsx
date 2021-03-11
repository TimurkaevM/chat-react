import React, { useEffect } from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../redux/contacts';
import Contact from './Contact';
import Form from './Form';
import ContactsSkeleton from './ContactsSkeleton';
import PropTypes from 'prop-types';

function Contacts() {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);
  const loading = useSelector((state) => state.contacts.loading);

  useEffect(() => {
    dispatch(loadContacts());
  }, []);

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.fullname.indexOf(filter) > -1 ||
      contact.fullname.toLowerCase().indexOf(filter) > -1
    );
  });

  return (
    <div className={style.sidebar} id="contacts">
      <div className={style.innerSidebar}>
        <Form />
        <div className={style.contacts}>
          {loading ? (
            <ContactsSkeleton />
          ) : (
            filteredContacts.map((contact) => {
              return <Contact key={contact._id} contact={contact} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

Contacts.propTypes = {
  contact: PropTypes.object,
};

export default Contacts;
