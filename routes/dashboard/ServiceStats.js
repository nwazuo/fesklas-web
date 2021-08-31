import React from "react";
import { Col, Row } from "antd";
import { employeeWorkData, employeeData } from "../../public/data/data.js";

import IconWithTextCard from "../../app/components/dashboard/CRM/IconWithTextCard";

const ServiceStats = () => {
  return (
    <Row>
      <Col xl={8} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
        <IconWithTextCard
          icon="star"
          title={employeeWorkData.unverified_customers}
          subTitle="Unverified Customers"
          cardColor="cyan"
        />
      </Col>
      <Col xl={8} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
        <IconWithTextCard
          icon="star"
          cardColor="orange"
          title={employeeWorkData.verified_customers}
          subTitle="Verified Customers"
        />
      </Col>
      <Col xl={8} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
        <IconWithTextCard
          icon="star"
          cardColor="teal"
          title={employeeWorkData.unreplied_feedback}
          subTitle="Unreplied Feedback"
        />
      </Col>
    </Row>
  );
};

export const SubscriptionMetrics = () => {
  return (
    <Row>
      <Col xl={8} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
        <IconWithTextCard
          icon="star"
          title={subscriptionData.current_subscription}
          subTitle="Current Subcription"
          cardColor="cyan"
        />
      </Col>
      <Col xl={8} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
        <IconWithTextCard
          icon="star"
          cardColor="orange"
          title={`${subscriptionData.fulfilled_service_days}/${subscriptionData.total_service_days}`}
          subTitle="Service days fulfilled"
        />
      </Col>
      <Col xl={8} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
        <IconWithTextCard
          icon="star"
          cardColor="teal"
          title={subscriptionData.subscription_start_date}
          subTitle="Subscription start"
        />
      </Col>
      <Col xl={8} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
        <IconWithTextCard
          icon="star"
          cardColor="red"
          title={subscriptionData.subscription_end_date}
          subTitle="Subscription end"
        />
      </Col>
    </Row>
  );
};

export default ServiceStats;
