import React from "react";
import MentalHealthSection from "./metal.health";
import SupportSection from "./support-section";
import TestimonialSection from "./testimonial-section";
import Banner from "./banner";
import FacultySupport from "./faculty-support";

const Home = () => {
  return (
    <>
      <Banner />
      <MentalHealthSection />
      <SupportSection />
      <TestimonialSection />
      <FacultySupport />
    </>
  );
};

export default Home;
