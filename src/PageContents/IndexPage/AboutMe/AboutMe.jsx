import React from 'react';
import { Flex, Text } from '@cdkit/react-ui';

import Title from '../../../components/Title/Title';
import AboutMeList from './AboutMeList';

import * as style from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

function AboutMe() {
  return (
    <Flex as='section' className={cx('about')}>
      <Flex className={cx('title')}>
        <Title typo='h4' className={cx('str')}>
          About Me
        </Title>
        <Text typo='c1' as='span' className={cx('lu')}>
          Last update : 2024.12.07
        </Text>
      </Flex>
      <Flex className={cx('box')}>
        <Flex className={cx('left')}>
          <AboutMeList
            name='이름'
            content={{
              label: '김명준',
            }}
          />
          <AboutMeList
            name='생년월일'
            content={{
              label: '1994.02.04',
            }}
          />
          <AboutMeList
            name='Email'
            content={{
              label: 'myeongjun222@gmail.com',
            }}
          />
        </Flex>
        <Flex className={cx('right')}>
          <AboutMeList
            name='깃 저장소'
            content={{
              label: '깃 저장소 가기',
              link: 'https://github.com/KMJ192',
            }}
          />
          <AboutMeList
            name='블로그'
            content={{
              label: '블로그 가기',
              link: 'https://github.com/KMJ192',
            }}
          />
          <AboutMeList
            name='코드 스타일'
            content={{
              label: 'Notion 가기',
              link: 'https://flaxen-asparagus-b90.notion.site/155d7854f6678045ab6ed35e9aff0208',
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AboutMe;
