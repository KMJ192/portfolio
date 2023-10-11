import React from 'react';
import { Flex, Text, Spacing, Center, Badge } from '@upcast/react-ui';

import * as style from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

function ListContents({
  name,
  company,
  project,
  period,
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
        <Text className={cx('company')} typo='h2'>
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
        <Flex className={cx('bottom')}>
          <Text typo='t1'>{project}</Text>
          <Spacing spacing={8} />
          <Text>{period}</Text>
          <Spacing spacing={16} />
          <Flex className={cx('description')}>
            <Text typo='t2'>프로젝트 설명</Text>
            {desc.map((text, index) => {
              return (
                <Center key={index} className={cx('text')} horizontal={false}>
                  <Text>• {text}</Text>
                </Center>
              );
            })}
          </Flex>
          <Spacing spacing={16} />
          <Flex className={cx('performance')}>
            <Text typo='t2'>성과</Text>
            {perf.map(({ link, text, exp }, idx) => {
              const isLink = link !== 'none';
              return (
                <Flex key={idx} className={cx('text')}>
                  {isLink && (
                    <Text
                      as='a'
                      href={link}
                      target='_blank'
                      className={cx('link')}
                    >
                      • <span>{text}</span>
                    </Text>
                  )}
                  {!isLink && <Text>• {text}</Text>}
                  <Flex className={cx('exp')}>
                    {exp && (
                      <>
                        <Spacing spacing={2} />
                        {exp.map((explanation, idx) => {
                          return (
                            <Text key={idx} className={cx('expText')}>
                              - {explanation}
                            </Text>
                          );
                        })}
                      </>
                    )}
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
          <Spacing spacing={16} />
          <Flex className={cx('stack')}>
            <Text typo='t2'>기술 스택</Text>
            <Flex className={cx('stackList')}>
              {stack.map((stack) => {
                return (
                  <Badge colorSchema='custom' className={cx('badge')}>
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
