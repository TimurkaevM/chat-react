import React from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from '../../redux/contacts';

function Form(props) {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterContacts = (e) => {
    dispatch(setContactsFilter(e.target.value));
  };

  return (
    <div className={`${style.flex} ${style.inputWithIcon}`}>
      <input
        type="text"
        value={filter}
        onChange={handleFilterContacts}
        placeholder="Search contact"
        className={style.form}
      />
      <i className={`material-icons ${style.search}`}>search</i>
    </div>
  );
}

export default Form;
