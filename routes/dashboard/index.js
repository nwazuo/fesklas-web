import React from "react";
import { Col, Row, Alert, Card, Button, Typography, Divider } from "antd";
import Link from "next/link";
import { employeeData } from "../../public/data/data.js";
import ServiceStats from "./ServiceStats";
import VerificationsTable from "./VerificationsTable.js";

import "./dashboard.css";

const { Text } = Typography;

const Dashboard = () => (
  <>
    <h1>
      {" "}
      Hi 👋 <span className="gx-text-secondary">Adebisi</span>, welcome to your{" "}
      {employeeData.employee_type.replace("_", " ")} dashboard
    </h1>
    <Divider />
    <div className="gx-mt-4">
      <ServiceStats />
    </div>
    <div className="gx-mt-4">
      <VerificationsTable />
    </div>
  </>
);

export default Dashboard;
