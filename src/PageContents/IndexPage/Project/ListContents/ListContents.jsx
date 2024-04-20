import React from 'react';
import { Flex, Text, Spacing, Center, Badge } from '@cdkit/react-ui';

import * as style from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

function ListContents({
  name,
  company,
  project,
  period,
  contribution,
  desc,
  perf,
  img,
  stack,
  isLast,
  slideImg,
  setSlideImg,
}) {
  return (
    <Flex className={cx('content')}>
      {company && (
        <Text className={cx('company')} typo='h4'>
          {company}
        </Text>
      )}
      <Flex className={cx('box')}>
        <Center className={cx('top')} horizontal={false}>
          <a
            href={img.link}
            target='_blank'
            className={cx('img')}
            style={{
              width: img.width,
              height: img.height,
            }}
          >
            <Flex
              className={cx('imgList')}
              style={{
                width: `${img.cnt * img.width}px`,
                transform: `translateX(-${img.width * slideImg[name]}px)`,
              }}
            >
              {img.list.map((src, idx) => {
                return (
                  <img
                    key={idx}
                    draggable={false}
                    src={src}
                    alt='img'
                    style={{
                      width: `${img.width}px`,
                      height: `${img.height}px`,
                    }}
                  />
                );
              })}
            </Flex>
          </a>
          <Flex className={cx('selector')}>
            {img.cnt > 1 &&
              img.list.map((_, idx) => {
                const isSelect = idx === slideImg[name];
                return (
                  <span
                    key={idx}
                    className={cx('dot', { isSelect })}
                    onClick={() => {
                      if (!isSelect) {
                        setSlideImg({
                          ...slideImg,
                          [name]: idx,
                        });
                      }
                    }}
                  ></span>
                );
              })}
          </Flex>
        </Center>
        <Spacing spacing={1} unit='rem' />
        <Flex className={cx('bottom')}>
          <Text typo='t1'>{project}</Text>
          <Spacing spacing={8} />
          <Text>{period}</Text>
          <Spacing spacing={8} />
          <Text>{contribution}</Text>
          <Spacing spacing={16} />
          <Center vertical={false} className={cx('description')}>
            <Text typo='t3'>프로젝트 설명</Text>
            {desc.map((text, index) => {
              return (
                <Center key={index} className={cx('desc')} horizontal={false}>
                  <div class={cx('mark')}></div>
                  <Text class={cx('label')}>{text}</Text>
                </Center>
              );
            })}
          </Center>
          <Spacing spacing={16} />
          <Flex className={cx('performance')}>
            <Text typo='t2'>성과</Text>
            {perf.map(({ link, text, exp }, idx) => {
              const isLink = link !== 'none';
              return (
                <Flex key={idx} flexDirection='column'>
                  {isLink && (
                    <Center
                      as='a'
                      href={link}
                      target='_blank'
                      className={cx('link', 'desc')}
                      display='flex'
                      horizontal={false}
                    >
                      <div class={cx('mark')}></div>
                      <Text className={cx('label')}>{text}</Text>
                    </Center>
                  )}
                  {!isLink && (
                    <Center
                      display='flex'
                      className={cx('desc')}
                      horizontal={false}
                    >
                      <div class={cx('mark')}></div>
                      <Text className={cx('label')}>{text}</Text>
                    </Center>
                  )}
                  <Flex className={cx('exp')}>
                    {exp && (
                      <Flex className={cx('exp-label')} flexDirection='column'>
                        {exp.map((explanation, idx) => {
                          return (
                            <Text key={idx} className={cx('expText')}>
                              - {explanation}
                            </Text>
                          );
                        })}
                      </Flex>
                    )}
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
          <Spacing spacing={16} />
          <Flex className={cx('stack')}>
            <Text typo='t2'>사용 기술</Text>
            <Flex className={cx('stackList')}>
              {stack.map((stack, idx) => {
                return (
                  <Badge key={idx} colorSchema='custom' className={cx('badge')}>
                    {stack}
                  </Badge>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {!isLast && <Spacing spacing={48} />}
    </Flex>
  );
}

export default ListContents;
