import React from 'react';

import { SubscriptionMetrics } from './SubscriptionMetrics';
import Tiers from './Tiers';

// the below line should be in the Tiers/index.js
// file but somehow nextJS keeps throwing a strange
// error when I try to import it both there and here
// import './Tiers/tiers.css';

const SubscriptionPage = () => {
  return (
    <>
      <h1>Subscription Stats</h1>
      <SubscriptionMetrics />
      <Tiers />
    </>
  );
};

export default SubscriptionPage;
