import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
  </Layout>
);

export const Head = () => <Seo />;

export default NotFoundPage;
