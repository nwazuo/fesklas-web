import React from "react";
import { Card, Divider, Table } from "antd";
import Link from "next/link";
import Icon from "@ant-design/icons";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 200,
    render: (text) => <span className="gx-link">{text}</span>,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text, record) => (
      <span>
        <span
          className={`gx-badge gx-mb-0 gx-text-white gx-badge-${record.status.color}`}
        >
          {record.status.title}
        </span>
      </span>
    ),
  },
  {
    title: "Action",
    dataIndex: "status",
    key: "status",
    render: (text, record) => (
      <span className="gx-link">
        <Link href={record.action.link}>{record.action.text}</Link>
      </span>
    ),
  },
];

const data = [
  {
    key: 1,
    name: "Chizo Nwazuo",
    address: "No 3 Heaven Avenue, Eligwe Road",
    status: {
      color: "red",
      title: "unverified",
    },
    action: {
      text: "Verify",
      link: "#",
    },
  },
  {
    key: 1,
    name: "Emmanuel Morisson",
    address: "Christiana Lodge, Ihiagwa, FUTO",
    status: {
      color: "green",
      title: "verified",
    },
    action: {
      text: "-",
      link: "#",
    },
  },
  {
    key: 1,
    name: "Charisma Standley",
    address: "Glo Lodge, Umuchima, Forest Road",
    status: {
      color: "red",
      title: "unverified",
    },
    action: {
      text: "Verify",
      link: "#",
    },
  },
  {
    key: 1,
    name: "Antia Ihekanode",
    address: "Palm tree avenue, Okigwe Territory, US",
    status: {
      color: "red",
      title: "unverified",
    },
    action: {
      text: "Verify",
      link: "#",
    },
  },
  {
    key: 1,
    name: "Arc John",
    address: "No 3 Calling Road, Motivation Avenue",
    status: {
      color: "green",
      title: "verified",
    },
    action: {
      text: "-",
      link: "#",
    },
  },
];

const tableConfig = {
  bordered: true,
  pagination: { position: "both" },
  size: "default",
};

const VerificationsTable = () => {
  return (
    <Card title="Customer Verifications">
      <Table
        className="gx-table-responsive"
        {...tableConfig}
        columns={columns}
        dataSource={data}
      />
    </Card>
  );
};

export default VerificationsTable;
