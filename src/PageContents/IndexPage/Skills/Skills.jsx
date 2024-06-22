import React from 'react';
import { Flex, Text, Spacing } from '@cdkit/react-ui';

import Title from '../../../components/Title/Title';

import docker from './image/docker.png';
import emotion from './image/emotion.png';
import js from './image/js.png';
import rq from './image/react-query.png';
import rt from './image/react.png';
import rc from './image/recoil.png';
import rd from './image/redux.png';
import rollup from './image/rollup.png';
import sass from './image/sass.png';
import storybook from './image/storybook.png';
import ts from './image/ts.png';
import vite from './image/vite.png';
import webpack from './image/webpack.png';
import svelte from './image/svelte.png';
import GithubIcon from '../../../components/GithubIcon/GitHubIcon';

import * as style from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

function Skills() {
  return (
    <Flex as='section' className={cx('skills')}>
      <Title typo='h4' className={cx('title')}>
        Skills
      </Title>
      <Flex className={cx('list')}>
        <img draggable={false} src={ts} className={cx('square')} />
        <img draggable={false} src={js} className={cx('square')} />
        <img draggable={false} src={rt} />
        <img draggable={false} src={rd} />
        <img draggable={false} src={rc} className={cx('size2')} />
        <img draggable={false} src={rq} className={cx('size2')} />
        <img draggable={false} src={svelte} className={cx('size3')} />
        <img draggable={false} src={webpack} className={cx('size2')} />
        <img draggable={false} src={rollup} className={cx('size2')} />
        <img draggable={false} src={vite} />
        <img draggable={false} src={sass} className={cx('size4')} />
        <img draggable={false} src={emotion} className={cx('size3')} />
        <img draggable={false} src={storybook} className={cx('size0')} />
        <img draggable={false} src={docker} className={cx('size1')} />
        <GithubIcon className={cx('github')} />
      </Flex>
    </Flex>
  );
}

export default Skills;
