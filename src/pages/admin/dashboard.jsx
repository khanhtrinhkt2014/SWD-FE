import React from "react";
import { FaWallet, FaList, FaClipboardList, FaUsers, FaComment } from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    { title: "Total Balance", value: "1,215.18", icon: <FaWallet />, bg: "bg-green-100", border: "border-green-400" },
    { title: "Total Categories", value: "9", icon: <FaList />, bg: "bg-red-100", border: "border-red-400" },
    { title: "Total Courses", value: "23", icon: <FaClipboardList />, bg: "bg-blue-100", border: "border-blue-400" },
    { title: "Total Users", value: "8", icon: <FaUsers />, bg: "bg-pink-100", border: "border-pink-400" },
    { title: "Total Blogs", value: "7", icon: <FaComment />, bg: "bg-yellow-100", border: "border-yellow-400" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        ⏰ Admin Dashboard
      </h2>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md ${stat.bg} ${stat.border} border-t-4 flex items-center`}
          >
            <div className="text-3xl">{stat.icon}</div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
