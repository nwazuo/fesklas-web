import React from 'react';
import { Col, Row, Alert, Card, Button, Typography } from 'antd';
import Link from 'next/link';
import { subscriptionData } from '../../public/data/data.js';
import { ServiceStatsDonut } from './ServiceStatsDonut';
import { ServicesTimeline } from './ServicesTimeline';

import './dashboard.css';

const { Text } = Typography;

const InactiveSubscription = () => (
  <>
    <Row>
      <Col lg={24}>
        <Card title="Subscription Status" className="gx-card gx-mt-4 ">
          <Alert
            message="You do not have a subscription"
            description="Subscribe to one of our awesome plans to start enjoying our services"
            type="warning"
            showIcon
          />
          <Link href="/subscriptions">
            <a href="/subscriptions">
              <Button type="primary">Subscribe</Button>
            </a>
          </Link>
        </Card>
      </Col>
    </Row>
    <Row className="gx-justify-content-center gx-my-5">
      <Col>
        <img
          src={'/images/undraw_empty.svg'}
          alt="no sub"
          className="no-sub-img"
        />
      </Col>
    </Row>
  </>
);

const SubscriptionActive = () => (
  <>
    <Row>
      <Col lg={24}>
        <Card title="Subscription Status" className="gx-card gx-mt-4 ">
          <Alert
            message={
              <Text>
                You are currently on the <Text strong>PREMIUM</Text>{' '}
                subscription plan
              </Text>
            }
            showIcon
            type="info"
            className="gx-p-3"
          />
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card className="gx-card" title="Services Days Stats">
          <ServiceStatsDonut />
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card className="gx-card" title="Services Days Stats">
          <div className="gx-mt-3">
            <ServicesTimeline />
          </div>
        </Card>
      </Col>
    </Row>
  </>
);

const Dashboard = () => (
  <>
    <h1>
      {' '}
      Hi 👋 <span className="gx-text-secondary">u123k</span>, welcome to your
      dashboard
    </h1>
    {subscriptionData.is_subscribed ? (
      <SubscriptionActive />
    ) : (
      <InactiveSubscription />
    )}
  </>
);

export default Dashboard;
