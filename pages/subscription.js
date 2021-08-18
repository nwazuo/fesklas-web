import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import CircularProgress from '../app/components/CircularProgress';

import '../routes/subscription/subscription.css';

const SubscriptionView = dynamic(() => import('../routes/subscription'), {
  loading: () => <CircularProgress />,
});

const Subscription = () => {
  return (
    <>
      <Head>
        <title>Subscription</title>
      </Head>
      <SubscriptionView />
    </>
  );
};

export default Subscription;
