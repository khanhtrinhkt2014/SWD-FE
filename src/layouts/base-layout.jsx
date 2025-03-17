import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BaseLayout;
