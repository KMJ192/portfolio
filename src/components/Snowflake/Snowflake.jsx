import React from 'react';

import classNames from 'classnames/bind';
import * as style from './style.module.scss';
const cx = classNames.bind(style);

function Snowflake({ frequency }) {
  return (
    <>
      {Array.from({ length: frequency }, () => 0).map((_, idx) => (
        <div className={cx('snowflake')} key={idx}></div>
      ))}
    </>
  );
}

export default Snowflake;
