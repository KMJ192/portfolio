import React from 'react';
import { Flex, Text, Spacing, Grid } from '@upcast/react-ui';

import Title from '../../../components/Title/Title';

import * as style from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

function AboutMe() {
  return (
    <Flex as='section' className={cx('about')}>
      <Flex className={cx('title')}>
        <Title typo='h2' className={cx('str')}>
          About Me
        </Title>
        <Text typo='c1' as='span' className={cx('lu')}>
          Last update : 2023.10.10
        </Text>
      </Flex>
      <Flex className={cx('box')}>
        <Flex className={cx('left')}>
          <Grid className={cx('info')}>
            <Text typo='t2' className={cx('first')}>
              이름
            </Text>
            <Text typo='s1'>김명준</Text>
          </Grid>
          <Grid className={cx('info')}>
            <Text typo='t2' className={cx('first')}>
              생년월일
            </Text>
            <Text typo='s1'>1994.02.04</Text>
          </Grid>
          <Grid className={cx('info')}>
            <Text typo='t2' className={cx('first')}>
              Email
            </Text>
            <Text typo='s1'>myeongjun222@gmail.com</Text>
          </Grid>
        </Flex>
        <Flex className={cx('right')}>
          <Grid className={cx('info')}>
            <Text typo='t2' className={cx('first')}>
              Github
            </Text>
            <Text
              as='a'
              typo='s1'
              target='_blank'
              href='https://github.com/KMJ192'
            >
              https://github.com/KMJ192
            </Text>
          </Grid>
          <Grid className={cx('info')}>
            <Text typo='t2' className={cx('first')}>
              Blog
            </Text>
            <Text
              as='a'
              href='https://kmj24.tistory.com/'
              target='_blank'
              typo='s1'
            >
              https://kmj24.tistory.com/
            </Text>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AboutMe;
