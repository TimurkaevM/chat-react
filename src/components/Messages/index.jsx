import React from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../../redux/messages';
import { useEffect } from 'react';
import Message from './Message';
import { useParams } from 'react-router-dom';
import { getUser } from '../../redux/application';

function Messages() {
  const params = useParams().id;
  const messages = useSelector((state) => state.messages.items);
  const loading = useSelector((state) => state.messages.loading);
  const myId = useSelector((state) => state.application.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params !== undefined) {
      dispatch(loadMessages(params, myId));
      dispatch(getUser());
    }
  }, [params]);

  if (loading) {
    return <div>loading messages...</div>;
  }
  return (
    <div className={style.messages}>
      {messages.map((message) => {
        return <Message key={message._id} message={message} />;
      })}
    </div>
  );
}

export default Messages;
