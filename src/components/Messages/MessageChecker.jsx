import React from 'react';
import { useSelector } from 'react-redux';
import OutgoingMessage from './OutgoingMessage';
import IncomingMessages from './IncomingMessages';
import PropTypes from 'prop-types';

function MessageChecker({ message }) {
  const myId = useSelector((state) => state.application.items._id);
  if (myId !== message.toUserId) {
    return <OutgoingMessage message={message} />;
  }
  return <IncomingMessages message={message} />;
}

MessageChecker.propTypes = {
  message: PropTypes.object,
};

export default MessageChecker;
