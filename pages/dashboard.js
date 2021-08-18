import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import CircularProgress from '../app/components/CircularProgress';
// import DashboardView from '../routes/dashboard';

// doing all css imports in this page component 
// because I experienced issues with importing css
// in the lazy-loaded components' file. Something to 
// do with the fact that lazy-loaded components are
// server-side rendered
import '../routes/dashboard/dashboard.css';

const DashboardView = dynamic(() => import('../routes/dashboard'), {
  loading: () => <CircularProgress />,
});

const Dashboard = () => (
  <>
    <Head>
      <title>Admin Dashboard</title>
    </Head>
    <DashboardView />
  </>
);

export default Dashboard;
