import React, { useEffect, useRef } from 'react';

import { Center, Flex, Text } from '@cdkit/react-ui';

import { useScrollState } from '../../store/scroll';

import classNames from 'classnames/bind';
import * as style from './style.module.scss';
const cx = classNames.bind(style);

function Header() {
  const lineRef = useRef(null);
  const { y: scrollY } = useScrollState();

  useEffect(() => {
    if (lineRef.current) {
      const line = lineRef.current;
      const per = Math.floor(
        (scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100,
      );
      if (per === 100) {
        line.style.borderRadius = '0';
      } else {
        line.style.borderRadius = '4px';
      }
      line.style.width = `${per}%`;
    }
  }, [scrollY]);

  return (
    <Flex as='header' className={cx('header')}>
      <Flex className={cx('box')}>
        <Center className={cx('contents')}>
          <Text typo='s3'>Portfolio</Text>
          <Flex className={cx('left')} as='nav'>
            <Text as='a' href='#about-me' typo='s3' className={cx('nav')}>
              About Me
            </Text>
            <Text as='a' href='#introduction' typo='s3' className={cx('nav')}>
              Introduction
            </Text>
            <Text as='a' typo='s3' href='#career' className={cx('nav')}>
              Career
            </Text>
            <Text as='a' typo='s3' href='#projects' className={cx('nav')}>
              Projects
            </Text>
            <Text as='a' typo='s3' href='#skills' className={cx('nav')}>
              Skills
            </Text>
          </Flex>
        </Center>
      </Flex>
      <div className={cx('scroll')} ref={lineRef}></div>
    </Flex>
  );
}

export default Header;
