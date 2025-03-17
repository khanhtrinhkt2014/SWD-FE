import React from "react";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-400 text-white p-10">
      <div className="max-w-lg">
        <img
          src="/src/assets/MentalEducareHealth.png"
          alt="MentalEducare"
          className="w-36 mb-5"
        />
        <h1 className="text-4xl font-bold mb-5">
          With you on the journey to emotional balance
        </h1>
        <p className="text-lg mb-6">
          Bridging Minds, Connecting Hearts – Support for Students, Parents, and Mental Health Professionals.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => (window.location.href = "/booking")}
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500"
          >
            Talk To Our Team
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
