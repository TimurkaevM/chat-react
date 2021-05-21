import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.css';

function SocialItem(props) {
  return (
    <div className={style['social-item']}>
      <div className={style['social-icon']}>{props.children}</div>
      <div className={style.text}>{props.text}</div>
    </div>
  );
}

SocialItem.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};

export default SocialItem;
