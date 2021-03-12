import React from 'react';
import style from './style.module.css';

function Loading(props) {
  return (
    <div className={style.loading}>
      Loading...
      <i className="material-icons">autorenew</i>
    </div>
  );
}

export default Loading;
