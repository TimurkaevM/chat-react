import React from 'react';
// import style from './style.module.css';

function Message(props) {
  if (props.message.type === 'info') {
    return 'info mess here';
  }

  if (props.message.fromUserId === '5f2ea3801f986a01cefc8bcd') {
    return 'исход';
  }

  return 'ход';
}

export default Message;
