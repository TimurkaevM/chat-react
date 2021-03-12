import React from 'react';
import SocialItem from './SocialItem';
import PropTypes from 'prop-types';

import style from './style.module.css';

function SocialPage(props) {
  return (
    <div className={style.social}>
      <div className={style['social-title']}>Social</div>
      <div className={style['social-block']}>
        {!props.user.socials.instagram ? null : (
          <SocialItem text={props.user.socials.instagram}>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </SocialItem>
        )}
        {!props.user.socials.twitter ? null : (
          <SocialItem text={props.user.socials.twitter}>
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </SocialItem>
        )}
        {!props.user.socials.facebook ? null : (
          <SocialItem text={props.user.socials.facebook}>
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
          </SocialItem>
        )}
      </div>
    </div>
  );
}

SocialPage.propTypes = {
  instagram: PropTypes.string,
  twitter: PropTypes.string,
  facebook: PropTypes.string,
};

export default SocialPage;
