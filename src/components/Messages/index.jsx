import React from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../../redux/messages';
import { useEffect } from 'react';
import Message from './Message';
import MessageForm from './MessageForm';
import { useParams } from 'react-router-dom';
import { getUser } from '../../redux/application';
import Header from './Header/Header';
import MessagesPreloader from './MessagesPreloader';
import Loading from './Loading';

function Messages() {
  const messageFilter = useSelector((state) => state.messages.messageFilter);
  const params = useParams().id;
  const messages = useSelector((state) => state.messages.items);
  const myId = useSelector((state) => state.application.items._id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params !== undefined) {
      dispatch(loadMessages(params, myId));
      dispatch(getUser());
    }
  }, [params]);

  const filteredMessages = messages.filter((message) => {
    return message.content.indexOf(messageFilter) > -1;
  });

  if (!params) {
    return <MessagesPreloader />;
  }

  return (
    <div className={style.messages}>
      <Header />
      <div className={style.message_block}>
        {filteredMessages.map((message) => {
          return <Message key={message._id} message={message} />;
        })}
      </div>
      <MessageForm />
    </div>
  );
}

export default Messages;
