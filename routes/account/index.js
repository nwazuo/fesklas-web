import React from 'react';
import { Col, Row } from 'antd';

import './index.css';
import AccountInfo from './AccountInfo';
import VerificationDetails from './VerificationDetails';

const AccountView = () => (
  <>
    <h1>Account</h1>
    <Row>
      <Col md={12}>
        <AccountInfo />
      </Col>
      <Col md={12}>
        <VerificationDetails />
      </Col>
    </Row>
  </>
);

export default AccountView;
