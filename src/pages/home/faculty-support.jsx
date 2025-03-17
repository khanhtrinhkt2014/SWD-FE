import React from "react";
import {
  FaChalkboardTeacher,
  FaComments,
  FaClipboardList,
  FaEnvelope,
} from "react-icons/fa";

const FacultySupport = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher className="text-blue-500 text-4xl mx-auto" />,
      title: "Professional Development Trainings",
    },
    {
      icon: <FaComments className="text-blue-500 text-4xl mx-auto" />,
      title: "On-Demand Mental Health Coaching",
    },
    {
      icon: <FaClipboardList className="text-blue-500 text-4xl mx-auto" />,
      title: "Supporting Student Wellbeing Guides",
    },
    {
      icon: <FaEnvelope className="text-blue-500 text-4xl mx-auto" />,
      title: "Customizable Email Templates & Scripted Scenarios",
    },
  ];

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold text-gray-900">
        Supporting <span className="font-bold">Faculty & Staff</span>
      </h2>
      <p className="text-gray-600 mt-2">
        Oasis also has unique content, tools, guides, and training for your
        faculty and staff.
      </p>
      <div className="w-20 h-1 bg-yellow-500 mx-auto my-4"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold text-gray-900 mt-4">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultySupport;
