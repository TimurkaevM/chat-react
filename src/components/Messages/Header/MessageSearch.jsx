import React from 'react';
import style from '../style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setMessagesFilter } from '../../../redux/messages';

function MessageSearch(props) {
  const messageFilter = useSelector((state) => state.messages.messageFilter);
  const dispatch = useDispatch();

  const handleFilterMessages = (e) => {
    dispatch(setMessagesFilter(e.target.value));
  };
  return (
    <div className={style.search}>
      <i className="material-icons">search</i>
      <input
        type="text"
        value={messageFilter}
        onChange={handleFilterMessages}
      />
    </div>
  );
}

export default MessageSearch;
