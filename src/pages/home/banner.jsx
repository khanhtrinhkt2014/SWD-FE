import React from "react";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-400 text-white p-10">
      <div className="max-w-lg">
        <img
          src="https://oasiseducation.com/wp-content/uploads/2020/06/cropped-Oasis-logo-blue.png"
          alt="Oasis Logo"
          className="w-36 mb-5"
        />
        <h1 className="text-4xl font-bold mb-5">
          Extending Your Mental Health Support Coverage
        </h1>
        <p className="text-lg mb-6">
          Oasis Helps K-12 And Higher Education Institutions Support Student,
          Faculty, And Staff Wellbeing With Access To Mental Health
          Professionals And Evidence-Based Content
        </p>
        <div className="flex gap-4">
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500">
            Talk To Our Team
          </button>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg border-2 border-black hover:bg-black hover:text-white">
            Download One-Pager
          </button>
        </div>
      </div>

      <div className="mt-10 md:mt-0">
        <img
          src="https://oasiseducation.com/wp-content/uploads/2023/04/shutterstock_1909607620-1-2-1-1.png"
          alt="Student"
          className="w-80 rounded-lg"
        />
      </div>
    </section>
  );
};

export default Banner;
