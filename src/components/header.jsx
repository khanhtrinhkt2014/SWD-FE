import { ChevronDown } from "lucide-react";
import { Avatar, Button, Dropdown, Menu, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser =  localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const menuItems = [
    { title: "About" },
    {
      title: "Solutions",
      subItems: [
        { title: "Mental Health Assessment", link: "/survey" },
        { title: "Support Programs", link: "/support-program" },
      ],
    },
    { title: "Blog" },
    { title: "Resources" },
    { title: "Contact Us" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/src/assets/MentalEducareHealth.png"
              alt="MentalEducare"
              className="h-10 cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <button className="flex items-center space-x-1 text-black hover:text-black transition">
                <span>{item.title}</span>
                {item.subItems && <ChevronDown className="w-4 h-4" />}
              </button>
              {item.subItems && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ul className="py-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link to={subItem.link}>{subItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Hiển thị avatar hoặc Login/Signup */}
        <div className="hidden md:flex space-x-4">
          {user ? (
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="profile">
                    <Link to="/profile">Profile</Link>
                  </Menu.Item>
                  <Menu.Item key="logout" onClick={handleLogout}>
                    Logout
                  </Menu.Item>
                </Menu>
              }
              trigger={["click"]}
            >
              <Space>
                <Avatar src={user.avatar} />
              </Space>
            </Dropdown>
          ) : (
            <>
              <Link to="/authpage/login-page">
                <Button type="default" className="text-gray-700">
                  Login
                </Button>
              </Link>
              <Link to="/authpage/signup-page">
                <Button type="primary">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
