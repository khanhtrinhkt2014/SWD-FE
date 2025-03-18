import { ChevronDown } from "lucide-react";
import { Button } from "antd";
import { Link } from "react-router-dom";
const Header = () => {
  const menuItems = [
    { title: "About" },
    {
      title: "Solutions",
      subItems: [
        { title: "Mental Health Assessment", link: "/survey" },
        { title: "Support Programs", link: "/support-program" }
      ]
    },
    { title: "Who We Serve" },
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
        <div className="hidden md:flex space-x-4">
          <Link to="/authpage/login-page">
            <Button type="default" className="text-gray-700">
              Login
            </Button>
          </Link>
          <Link to="/authpage/signup-page">
            <Button type="primary">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
