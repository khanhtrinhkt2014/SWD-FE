import React from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const SignupPage = () => {
  const onFinish = (values) => {
    console.log("Signup Success:", values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg">
        <Title level={3} className="text-center">Đăng Ký</Title>
        
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Tên đầy đủ"
            name="fullname"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input placeholder="Nhập họ và tên" />
          </Form.Item>

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

          <Button type="primary" htmlType="submit" block>Đăng Ký</Button>
        </Form>

        <div className="text-center mt-4">
          <Text>Đã có tài khoản?</Text> <Link to="/login">Đăng nhập</Link>
        </div>
      </Card>
    </div>
  );
};

export default SignupPage;
