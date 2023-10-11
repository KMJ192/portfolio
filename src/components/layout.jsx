/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from 'react';

import Header from './Header/Header';

import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main className='main'>{children}</main>
    </>
  );
};

export default Layout;
