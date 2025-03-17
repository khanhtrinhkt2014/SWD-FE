import React from "react";

import { CheckCircle } from "lucide-react";

const features = [
  "24/7 Support Counseling",
  "Same-Day Appointments",
  "Monitored Peer Support Forum",
  "Professionally Developed Courses",
  "Evidence-Based Articles & Videos",
  "Teletherapy (No Insurance Needed)",
];

const MentalHealthSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 px-10 py-16 max-w-6xl mx-auto">
      <div className="w-full md:w-1/2">
        <img
          src="https://img-c.udemycdn.com/course/750x422/5487300_2f39.jpg"
          alt="Mental Health Support"
          className="w-full rounded-3xl shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h3 className="text-3xl font-semibold text-gray-800 mt-2">
          Mental Health Services
        </h3>
        <p className="text-gray-600 mt-4">
          MentalEducare eliminates wait times for mental health support and reduces
          overwhelming caseloads for counseling center staff.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="text-yellow-500" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentalHealthSection;
