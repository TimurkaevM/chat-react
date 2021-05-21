import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addedMessages } from '../../redux/messages';
import FileButton from './FileButton';
import SendButton from './SendButton';

import style from './style.module.css';

function MessageForm() {
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const myId = useSelector((state) => state.application.items._id);

  const contactId = useParams().id;
  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleAddedMessage = () => {
    if (message.length !== 0) {
      dispatch(addedMessages(myId, contactId, message));
      setMessage('');
    }
  };

  return (
    <div className={style['message-form']}>
      <input
        type="text"
        onChange={changeMessage}
        value={message}
        placeholder="Write a message..."
        className={style['message-input']}
      />
      <FileButton />
      <SendButton message={message} handleAddedMessage={handleAddedMessage} />
    </div>
  );
}

export default MessageForm;
