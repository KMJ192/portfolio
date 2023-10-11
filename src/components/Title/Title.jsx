import React from 'react';

import { Flex, Text } from '@upcast/react-ui';

import * as style from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

function Title({ children, typo, className }) {
  return (
    <Text typo={typo} className={cx('title', className)}>
      {children}
    </Text>
  );
}

export default Title;
