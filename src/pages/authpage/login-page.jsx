import React from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { Link } from "react-router-dom";
import { GoogleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Login Success:", values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg p-6">
        <Title level={2} className="text-center">Welcome Back</Title>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label={<span className="font-medium text-red-500">* Email</span>}
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Invalid email format!" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label={<span className="font-medium text-red-500">* Password</span>}
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <div className="text-right mb-4">
            <Link to="/forgot-password" className="text-blue-500">
              Forgot password
            </Link>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            block
            className="bg-gradient-to-r from-[#2DB4F7] to-[#35A4E0] hover:opacity-80 text-white"
          >
            Login
          </Button>

        </Form>

        <div className="relative flex items-center justify-center my-4">
          <span className="absolute bg-white px-2 text-gray-500">Or sign in with</span>
          <hr className="w-full border-gray-300" />
        </div>

        <Button block icon={<GoogleOutlined />} className="border border-gray-300">
          Sign in with Google
        </Button>
      </Card>
    </div>
  );
};

export default LoginPage;
