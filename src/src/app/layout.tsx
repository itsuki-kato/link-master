"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { baseUrl } from "@/common/constaints";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("トピクラ", "topic-cluster", <TeamOutlined />, [
    getItem("管理", "management"),
    getItem("ボード", "board"),
  ]),
  getItem("ユーザー", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("アップロード", "upload", <FileOutlined />),
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleOnClick: MenuProps["onClick"] = (e) => {
    const path = e.keyPath.reverse().join("/");
    router.push("/" + path);
  };

  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
              theme="dark"
            >
              <div className="demo-logo-vertical" />
              <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
                onClick={handleOnClick}
              />
            </Sider>
            <Layout>
              {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
              {children}
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
