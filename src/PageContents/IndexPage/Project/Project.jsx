import React, { useState } from 'react';
import { Flex } from '@upcast/react-ui';

import Title from '../../../components/Title/Title';

import { projects } from './list';

import ListContents from './ListContents/ListContents';

import * as style from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

function Project() {
  const [slideImg, setSlideImg] = useState({
    upcast: 0,
    jonathanUI: 0,
    marker: 0,
    flightbase: 0,
  });

  return (
    <Flex as='section' className={cx('project')}>
      <Title typo='h2' className={cx('title')}>
        Project
      </Title>
      <Flex className={cx('list')}>
        {projects.map(
          (
            {
              name,
              company,
              project,
              period,
              contribution,
              desc,
              perf,
              img,
              stack,
            },
            idx,
          ) => {
            return (
              <ListContents
                key={name}
                name={name}
                company={company}
                project={project}
                period={period}
                contribution={contribution}
                desc={desc}
                perf={perf}
                img={img}
                stack={stack}
                slideImg={slideImg}
                setSlideImg={setSlideImg}
                isLast={idx === projects.length - 1}
              />
            );
          },
        )}
      </Flex>
    </Flex>
  );
}

export default Project;
