import React from 'react';

import style from './style.module.css';

function FileButton() {
  return (
    <div className={style['icon-file']}>
      <i className="material-icons">attach_file</i>
    </div>
  );
}

export default FileButton;
