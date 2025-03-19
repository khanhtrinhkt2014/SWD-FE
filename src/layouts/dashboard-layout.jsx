import React, { useState } from "react";
import {
  BarChartOutlined,
  FormOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SnippetsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Dropdown, Avatar, Space } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "1",
      label: "Profile",
      onClick: () => navigate("/profile"),
    },
    {
      key: "2",
      label: "Logout",
      onClick: () => navigate("/")
    },
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            background: "white",
          }}
          onClick={() => navigate("/")}
        >
          <img
            src="/src/assets/MentalEducareHealth.png"
            alt="MentalEduCare Logo"
            style={{ width: collapsed ? 40 : 120, height: "auto" }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          style={{ height: "100vh", backgroundColor: "#06b6d4" }}
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <BarChartOutlined />,
              label: "Dashboard",
              onClick: () => navigate("/dashboard"),
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "Manage User",
              onClick: () => navigate("/dashboard/manage-user"),
            },
            {
              key: "3",
              icon: <FormOutlined />,
              label: "Manage Survey",
              onClick: () => navigate("/dashboard/manage-survey"),
            },
            {
              key: "4",
              icon: <SnippetsOutlined />,
              label: "Manage Appointment",
              onClick: () => navigate("/dashboard/manage-appointment"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
          <Dropdown
            overlay={
              <Menu
                items={menuItems.map((item) => ({
                  key: item.key,
                  label: <span onClick={item.onClick}>{item.label}</span>,
                }))}
              />
            }
            trigger={["hover"]}
          >
            <Space>
              <Avatar src="https://i.pravatar.cc/40" />
            </Space>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
