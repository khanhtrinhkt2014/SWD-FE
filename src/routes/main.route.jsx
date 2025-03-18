import React from "react";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "../layouts/base-layout";
import Home from "../pages/home/home.page";
import DashboardLayout from "../layouts/dashboard-layout";
import Dashboard from "../pages/admin/dashboard";
import ManageUser from "../pages/admin/manage-user";
import SurveyManagement from "../pages/admin/manage-survey";
import AppointmentManagement from "../pages/admin/manage-appointment";
import LoginPage from "../pages/authpage/login-page";
import SignupPage from "../pages/authpage/signup-page";
import Booking from "../pages/home/booking";
import Survey from "../pages/survey/survey";
import SupportProgram from "../pages/survey/supportProgram";

const MainRoute = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/authpage/login-page" element={<LoginPage />} />
        <Route path="/authpage/signup-page" element={<SignupPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/support-program" element={<SupportProgram />} />
      </Route>
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/manage-user" element={<ManageUser />} />
        <Route path="/dashboard/manage-survey" element={<SurveyManagement />} />
        <Route
          path="/dashboard/manage-appointment"
          element={<AppointmentManagement />}
        />
      </Route>
    </Routes>
  );
};

export default MainRoute;
