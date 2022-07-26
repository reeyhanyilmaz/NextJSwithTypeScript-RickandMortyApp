import React from 'react';
import Layout from '../components/Layout';

function Episodes() {
  return (
    <div>Episodes</div>
  )
}


Episodes.getLayout = function getLayout(page:React.ReactElement) {
    return <Layout>{page}</Layout>;
  };

export default Episodes;