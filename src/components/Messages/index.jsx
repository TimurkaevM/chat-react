import React from 'react';
// import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Message';
import { loadMessages } from '../../redux/messages';
import { useEffect } from 'react';

function Messages() {
  const messages = useSelector((state) => state.messages.items);
  const loading = useSelector((state) => state.messages.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMessages());
  }, []);

  if (loading) {
    return <div>loading messages...</div>;
  }
  return (
    <div>
      {messages.map((message) => {
        return <Message key={messages.id} message={message} />;
      })}
    </div>
  );
}

export default Messages;
