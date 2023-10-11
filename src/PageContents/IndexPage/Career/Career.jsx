import React from 'react';
import { Flex, Text, Spacing, Center } from '@upcast/react-ui';

import Title from '../../../components/Title/Title';

import acryl from './acryl.png';
import pg from './pg.png';

import * as style from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

function Career() {
  return (
    <Flex as='section' className={cx('career')}>
      <Title typo='h2' className={cx('title')}>
        Career
      </Title>
      <Spacing spacing={48} />
      <Flex className={cx('company')}>
        <Center as='a' href='https://www.acryl.ai/' className={cx('link')}>
          <img className={cx('logo')} src={acryl} alt='logo' />
        </Center>
        <Flex className={cx('name')}>
          <Text typo='s1' className={cx('n')}>
            (주)아크릴
          </Text>
          <Text typo='c1' className={cx('date')}>
            재직기간 : 21.07.19 ~ 23.06.30
          </Text>
        </Flex>
        <Flex className={cx('content')}>
          <Center className={cx('text')} horizontal={false}>
            <Text>• 기업용 AI 전문 플랫폼 Jonathan을 운영합니다.</Text>
          </Center>
          <Center className={cx('text')} horizontal={false}>
            <Text>• Jonathan 플랫폼 웹 FE 개발자로 근무 했습니다.</Text>
          </Center>
        </Flex>
      </Flex>
      <Spacing spacing={32} />
      <Flex className={cx('company')}>
        <Center as='a' href='http://powergen.ai/' className={cx('link')}>
          <img className={cx('logo')} src={pg} alt='logo' />
        </Center>
        <Flex className={cx('name')}>
          <Text typo='s1' className={cx('n')}>
            (주)파워젠
          </Text>
          <Text typo='c1' className={cx('date')}>
            재직기간 : 19.06.24 ~ 21.02.28
          </Text>
        </Flex>
        <Flex className={cx('content')}>
          <Center className={cx('text')} horizontal={false}>
            <Text>• RPA 구축을 위한 에이전시 업체 입니다.</Text>
          </Center>
          <Center className={cx('text')} horizontal={false}>
            <Text>• RPA 개발자로 근무 했습니다.</Text>
          </Center>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Career;
