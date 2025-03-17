import React from "react";

const TestimonialSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-sm uppercase text-gray-600 tracking-wide">
          Join The Success
        </h3>
        <h2 className="text-3xl font-semibold text-gray-900 mt-2">
          Don't Just Take Our Word For It
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto my-4"></div>

        <p className="text-gray-600 italic max-w-2xl mx-auto mt-6">
          “MentalEducare fosters a supportive climate at our school. Daily well-being
          assessments not only empower students to express themselves but also
          equip adults to identify and proactively support those who may need
          extra care. Additionally, out-of-hours counselor access provides a
          safety net for students needing support beyond school hours.”
        </p>

        <div className="flex items-center justify-center mt-6">
          <img
            src="https://oasiseducation.com/wp-content/uploads/2024/03/image-2.jpg"
            alt="Dr. Jane Coughenour"
            className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
          />
          <div className="ml-4 text-left">
            <h4 className="text-lg font-semibold text-gray-900">
              Dr. Jane Coughenour
            </h4>
            <p className="text-blue-500 text-sm">
              Director Of State & Federal Programs, McKeesport Area School
              District
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
