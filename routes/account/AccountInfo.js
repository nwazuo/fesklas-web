import React from 'react';
import { Col, Row, Card, Form, Input, Button } from 'antd';

import { customerData } from '../../public/data/data.js';

const formInitialValues = {};

const AccountInfo = () => {
  const [form] = Form.useForm();

  // form submit button is conditionally rendered if
  // customer information edit request is approved
  // else display button to request edit
  return (
    <Card title="Account Information">
      <Form
        layout="vertical"
        name="update-account-info"
        form={form}
        initialValues={customerData}
      >
        <Form.Item name="UAID" label="UAID (Unique Apartment ID)">
          <Input disabled />
        </Form.Item>
        <Form.Item name="email_address" label="Email Address">
          <Input disabled />
        </Form.Item>
        <Form.Item name="phone_no" label="Phone Number">
          <Input disabled />
        </Form.Item>
        <Form.Item name="apartment_address" label="Apartment Address">
          <Input disabled />
        </Form.Item>
        <Button type="primary">Request Edit</Button>
      </Form>
    </Card>
  );
};

export default AccountInfo;
