import React from 'react';
import dynamic from 'next/dynamic';
import CircularProgress from '../app/components/CircularProgress';

const AccountView = dynamic(() => import('../routes/account'), {
  loading: () => <CircularProgress />,
});

const Account = () => <AccountView />;

export default Account;
