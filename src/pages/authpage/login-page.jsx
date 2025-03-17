import React from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Login Success:", values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg">
        <Title level={3} className="text-center">Đăng Nhập</Title>
        
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Vui lòng nhập email!" }]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>Đăng Nhập</Button>
        </Form>

        <div className="text-center mt-4">
          <Text>Bạn chưa có tài khoản?</Text> <Link to="/signup">Đăng ký</Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
