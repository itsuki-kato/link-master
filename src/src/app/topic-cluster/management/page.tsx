"use client";

import { Table, Layout, theme } from "antd";

const { Content } = Layout;

export default function Management() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        style={{
          padding: 24,
          minHeight: "90vh",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Table bordered />
      </div>
    </Content>
  );
}
