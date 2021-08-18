import React from 'react';
import AmCharts from '@amcharts/amcharts3-react';
import { donutChartConfigData } from '../../public/data/data.js';

export const ServiceStatsDonut = () => (
  <div className="App">
    <AmCharts.React
      style={{ width: '100%', height: '300px' }}
      options={donutChartConfigData}
    />
  </div>
);
