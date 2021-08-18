import React from 'react';
import { Col, Row, Card } from 'antd';
import PricingCard from './PricingCard';

// import './tiers.css';

const pricingTiers = [
  {
    price: 'N9000',
    tierName: 'BASIC',
    features: ['1 service day per week', 'Free trash bin', 'On-time pickups'],
    isCurrent: true,
  },
  {
    price: 'N12000',
    tierName: 'STANDARD',
    features: ['3 service days per week', 'Free trash bin', 'On-time pickups'],
    isHighlightedDeal: true,
  },
  {
    price: 'N20000',
    tierName: 'PREMIUM',
    features: [
      '5 service days per week',
      '2 Free trash bins',
      'One free week',
      'On-time pickups',
    ],
  },
];

const Tiers = () => {
  return (
    <Row>
      <Col span={24}>
        <Card title="Subscription Tiers">
          <div className="gx-price-tables gx-pt-default">
            <Row>
              {pricingTiers.map((tier) => (
                <Col xl={8} lg={24} md={8} xs={24}>
                  <PricingCard {...tier} />
                </Col>
              ))}
            </Row>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Tiers;
