import React from 'react';
import { useSelector } from 'react-redux';
import OutgoingMessage from './OutgoingMessage';
import IncomingMessages from './IncomingMessages';

function MessageChecker({ message }) {
  const myId = useSelector((state) => state.application.items);
  if (myId._id !== message.toUserId) {
    return <OutgoingMessage message={message} />;
  }
  return <IncomingMessages message={message} />;
}

export default MessageChecker;
