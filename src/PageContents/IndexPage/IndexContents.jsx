import React from 'react';

import { Flex, Text, Spacing } from '@upcast/react-ui';

import Introduction from './Introduction/Introduction';
import Career from './Career/Career';
import Skills from './Skills/Skills';
import Project from './Project/Project';
import AboutMe from './AboutMe/AboutMe';
import Main from './Main/Main';

import useScroll from '../../hooks/useScroll';
import Snowflake from '../../components/Snowflake/Snowflake';

import * as style from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

function IndexContents() {
  useScroll();

  return (
    <>
      <Snowflake frequency={50} />
      {/* <Main /> */}
      <Spacing spacing={112} />
      <Flex as='section' className={cx('contents')}>
        <div id='about-me'></div>
        <AboutMe />
        <div className={cx('line')} id='introduction'></div>
        <Introduction />
        <div className={cx('line')} id='career'></div>
        <Career />
        <div className={cx('line')} id='projects'></div>
        <Project />
        <div className={cx('line')} id='skills'></div>
        <Skills />
      </Flex>
    </>
  );
}

export default IndexContents;
