import React from 'react';
import Skeleton from 'react-loading-skeleton';
import style from './style.module.css';

function ContactsSkeleton(props) {
  const emptyArr = new Array(9).fill(1);
  return emptyArr.map((skeleton, index) => {
    return (
      <div className={style.skeletonContacts}>
        <div className={style.skeletonAvatar}>
          <Skeleton height={100} width={100} key={index} />
        </div>
        <div className={style.skeletonContact}>
          <Skeleton count={2} key={index} />
        </div>
      </div>
    );
  });
}

export default ContactsSkeleton;
