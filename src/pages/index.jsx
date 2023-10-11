import React from 'react';
import Seo from '../components/seo';
import IndexContents from '../PageContents/IndexPage/IndexContents';
import Layout from '../components/layout';

function IndexPage() {
  return (
    <Layout>
      <IndexContents />
    </Layout>
  );
}

export const Head = () => <Seo />;

export default IndexPage;
