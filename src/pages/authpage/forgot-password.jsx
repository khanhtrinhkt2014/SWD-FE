import React, { useState } from "react";
import { Form, Input, Button, Card, Typography, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Title } = Typography;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailSubmit = () => {
   
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email) {
      setIsEmailValid(true);
      message.success("Email hợp lệ! Vui lòng nhập mật khẩu mới.");
    } else {
      message.error("Email không tồn tại!");
    }
  };

  const handleResetPassword = () => {
    
    let storedUser = JSON.parse(localStorage.getItem("user"));
    storedUser.password = newPassword;
    localStorage.setItem("user", JSON.stringify(storedUser));

    message.success("Mật khẩu đã được đặt lại thành công!");
    navigate("/authpage/login-page");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg p-6">
        <Title level={2} className="text-center">Forgot Password</Title>

        {!isEmailValid ? (
          <Form layout="vertical">
            <Form.Item
              label="Email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Button type="primary" block onClick={handleEmailSubmit}>
              Submit
            </Button>
          </Form>
        ) : (
          <Form layout="vertical">
            <Form.Item
              label="New Password"
              rules={[{ required: true, message: "Please enter a new password!" }]}
            >
              <Input.Password
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Form.Item>
            <Button type="primary" block onClick={handleResetPassword}>
              Reset Password
            </Button>
          </Form>
        )}

        <div className="text-center mt-4">
          <Link to="/authpage/login-page" className="text-blue-500">
            Back to Login
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ForgotPassword;
