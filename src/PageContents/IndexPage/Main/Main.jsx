import React, { useEffect, useRef, useState } from 'react';
import { Center, Flex, Float, Text } from '@cdkit/react-ui';

import { useScrollState } from '../../../store/scroll';

import * as style from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

function Main() {
  const ref = useRef(null);

  const { y } = useScrollState();

  return (
    <Flex as='section' className={cx('container')}>
      <Text typo='h1' className={cx('text')} ref={ref}>
        {/* 안녕하세요 */}
      </Text>
    </Flex>
  );
}

export default Main;
