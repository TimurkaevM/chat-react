import React from 'react';
import style from './style.module.css';
import PropTypes from 'prop-types';

function InfoMessage({ message }) {
  return <div className={style.info_messages}>{message.content}</div>;
}

InfoMessage.propTypes = {
  message: PropTypes.object,
};

export default InfoMessage;
