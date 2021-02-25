import React from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../../redux/messages';
import { useEffect } from 'react';
import Message from './Message';
import { useParams } from 'react-router-dom';

function Messages() {
  const params = useParams();
  const messages = useSelector((state) => state.messages.items);
  const loading = useSelector((state) => state.messages.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id !== undefined) {
      dispatch(loadMessages(params.id));
    }
  }, [params]);

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
