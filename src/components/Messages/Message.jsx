import React from 'react';
import InfoMessage from './InfoMessage';
import MessageChecker from './MessageChecker';

function Message({ message }) {
  if (message.type === 'info') {
    return <InfoMessage message={message} />;
  }
  return <MessageChecker message={message} />;
}

export default Message;
