import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.css';

function Avatar(props) {
  return (
    <div
      className={`${style.avatar} ${style[props.size]}`}
      style={{ margin: props.margin }}
    >
      {props.children}
    </div>
  );
}

Avatar.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string.isRequired,
  margin: PropTypes.string,
};

export default Avatar;
