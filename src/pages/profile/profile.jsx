import React, { useEffect, useState } from "react";
import { Card, Button, Typography, Avatar, message } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      message.warning("Please log in first!");
      navigate("/authpage/login-page");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    message.success("Logged out successfully!");
    navigate("/authpage/login-page");
  };

  if (!user) return null;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg p-6 text-center">
        <Avatar size={80} src={user.avatar || "https://i.pravatar.cc/80"} />
        <Title level={3} className="mt-3">{user.name}</Title>
        <Text type="secondary">{user.email}</Text>
        <div className="mt-2">
          <Text strong className="text-blue-500">
            Role: {user.role === "admin" ? "Administrator" : "Student"}
          </Text>
        </div>

        <Button type="primary" block className="mt-4" onClick={handleLogout}>
          Logout
        </Button>
      </Card>
    </div>
  );
};

export default Profile;
