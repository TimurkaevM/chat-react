import React from 'react';
import InfoMessage from './InfoMessage';
import MessageChecker from './MessageChecker';

function Message({ message }) {
  if (message.type === 'info') {
    return <InfoMessage message={message} />;
  }
  return <MessageChecker message={message} />;
  // return (
  //   <div>
  //     {/*// className={`${style.message} ${*/}
  //     {/*//   props.message.type === 'info' ? `${style.info_messages}` : ''}`}*/}
  //     {props.message.content}
  //   </div>
  // );
}

export default Message;
