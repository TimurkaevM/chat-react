import React from 'react';

import style from './style.module.css';

function SendButton(props) {
  return (
    <div className={style['icon-file']} onClick={props.handleAddedMessage}>
      {props.message.length === 0 ? (
        <i className="material-icons">mic</i>
      ) : (
        <i className="material-icons">send</i>
      )}
    </div>
  );
}

export default SendButton;
