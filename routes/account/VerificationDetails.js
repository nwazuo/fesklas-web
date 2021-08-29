import React from "react";
import { Card, Row, Col, Carousel, Space, Typography, Divider } from "antd";
import { verificationData, customerData } from "../../public/data/data";

import "./index.css";

const { Title, Text } = Typography;

const { verification_date, verified_address } = verificationData;

const VerifiedView = () => {
  return (
    <div>
      <Space direction="vertical">
        <Text>Verification date:</Text>
        <Title level={5}>{verification_date}</Title>
        <Text>Verified address:</Text>
        <Title level={5}>{verified_address}</Title>
      </Space>
      <Divider>Verification Pictures</Divider>
      <Carousel autoplay>
        {verificationData.apartment_pictures.map((imageSource) => (
          <div>
            <img src={imageSource} alt="apartment image" />
          </div>
        ))}

        {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div> */}
      </Carousel>
    </div>
  );
};

const VerificationDetails = () => {
  return (
    <Card title="Verification Details">
      {customerData.is_verified ? (
        <VerifiedView />
      ) : (
        <p>Verification Pending...</p>
      )}
    </Card>
  );
};

export default VerificationDetails;
