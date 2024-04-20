import React from 'react';
import { Flex, Text, Spacing } from '@cdkit/react-ui';
import Title from '../../../components/Title/Title';

import * as style from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

function Introduction() {
  return (
    <Flex as='section' className={cx('intro')}>
      <Title typo='h4' className={cx('title')}>
        Introduction
      </Title>
      <Spacing spacing={24} />
      <Flex className={cx('box')}>
        <Flex className={cx('content')}>
          <Text typo='t2' className={cx('hi')}>
            안녕하세요. 웹 FE 개발자 김명준 입니다.
          </Text>
          <Spacing spacing={1} unit='rem' />
          <Text typo='s3'>
            문제점을 찾고 이에 따라 필요한 해결 방법을 찾아서 팀에 소개하고
            공유하는 것을 좋아합니다.
          </Text>
          <Text typo='s3'>
            프로젝트를 진행하며 발생되는 문제점을 찾아내어 해결하는데 기여하고,
            문제를 해결했던 경험을 공유하여 팀원의 역량 향상에 기여했습니다.
            오래된 코드 작성규칙을 개선된 구조로 설계 및 공유하여 개발 생산성
            향상에 기여하였고, 효율성 증대를 위해 컴포넌트 작성 패턴을 연구하고
            공유한 경험 등이 있습니다.
          </Text>
          <Text typo='s3'>
            공통으로 자주 사용될 수 있는 로직 또는 컴포넌트를 모듈화 및 배포하여
            공통 코드의 발생을 방지하고 개발 생산성 향상에 기여하였습니다. 또한
            프로젝트 설치 및 빌드 환경을 개선한 경험이 있으며, 팀원의 개발
            효율성을 높이기 위해 유용한 함수나 컴포넌트를 개발하고 라이브러리
            배포를 한 경험이 있습니다.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Introduction;
