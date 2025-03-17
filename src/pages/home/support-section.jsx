import React from "react";

const SupportSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 px-10 py-16 max-w-6xl mx-auto">
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-900">
          <span className="text-black">Eliminate</span> Wait Times &<br />
          <span className="text-black">Manage</span> Caseloads
        </h2>
        <p className="text-gray-600 mt-4">
          Oasis Support Counselors and monitored peer forums are available 24/7.
          You can also easily refer students to Support Counseling, Teletherapy,
          or assign content to manage your caseload.
        </p>

        <h3 className="text-3xl font-semibold text-gray-900 mt-10">
          <span className="text-black">Foster</span>{" "}
          <span className="font-bold">Essential</span> Life Skills
        </h3>
        <p className="text-gray-600 mt-4">
          Professionally developed and evidence-based eLearning modules and
          mental health literacy campaigns improve stress tolerance, build
          resilience, and promote self-efficacy.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://oasiseducation.com/wp-content/uploads/2024/02/Group-3184461.png"
          alt="Support Counseling"
          className="w-full md:max-w-md rounded-3xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default SupportSection;
