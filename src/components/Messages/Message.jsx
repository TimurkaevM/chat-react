import React from 'react';
import InfoMessage from './InfoMessage';
import MessageChecker from './MessageChecker';
import PropTypes from 'prop-types';

function Message({ message }) {
  if (message.type === 'info') {
    return <InfoMessage message={message} />;
  }
  return <MessageChecker message={message} />;
}

Message.propType = {
  message: PropTypes.object,
};

export default Message;
