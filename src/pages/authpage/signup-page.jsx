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
      <Card className="w-96 shadow-lg p-6">
        <Title level={2} className="text-center">Register</Title>

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
            label={<span className="font-medium text-red-500">* Name</span>}
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label={<span className="font-medium text-red-500">* Password</span>}
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item
            label={<span className="font-medium text-red-500">* Confirm Password</span>}
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please re-enter your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Re-enter your password" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            className="bg-gradient-to-r from-[#2DB4F7] to-[#35A4E0] hover:opacity-80 text-white"
          >
            Register
          </Button>
        </Form>

        <div className="text-center mt-4">
          <Text>Already have an account? </Text>
          <Link to="/login" className="text-blue-500">Sign in</Link>
        </div>
      </Card>
    </div>
  );
};

export default SignupPage;
