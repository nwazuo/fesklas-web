import React from 'react';
import { Timeline, Typography } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const { Text } = Typography;

// three status colors for missed(rec x icon), unfulfilled(gray) and fulfilled(green good icon)

// move data to data.js
export const ServicesTimeline = () => (
  <Timeline mode="left">
    <Timeline.Item label="unfulfilled" color="gray">
      <Text strong>15-08-2021</Text>
    </Timeline.Item>
    <Timeline.Item label="unfulfilled" color="gray">
      <Text strong>08-08-2021</Text>
    </Timeline.Item>
    <Timeline.Item label="fulfilled" color="green" dot={<CheckOutlined />}>
      <Text strong>01-08-2021</Text>
    </Timeline.Item>
    <Timeline.Item label="fulfilled" color="green" dot={<CheckOutlined />}>
      <Text strong>28-07-2021</Text>
    </Timeline.Item>
    <Timeline.Item label="fulfilled" color="green" dot={<CheckOutlined />}>
      <Text strong>21-07-2021</Text>
    </Timeline.Item>
    <Timeline.Item label="missed" color="red" dot={<CloseOutlined />}>
      <Text strong>13-07-2021</Text>
    </Timeline.Item>
  </Timeline>
);
