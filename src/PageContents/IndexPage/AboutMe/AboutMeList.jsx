import React from 'react';

import { Grid, Text } from '@cdkit/react-ui';

import * as style from './style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

function AboutMeList({ name, content }) {
  return (
    <Grid className={cx('info')}>
      <Text typo='s1' className={cx('first')}>
        {name}
      </Text>
      {content.link && (
        <Text as='a' typo='b1' target='_blank' href={content.link}>
          {content.label}
        </Text>
      )}
      {!content.link && <Text typo='b1'>{content.label}</Text>}
    </Grid>
  );
}

export default AboutMeList;
