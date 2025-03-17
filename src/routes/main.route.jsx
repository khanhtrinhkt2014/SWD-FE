import React from "react";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "../layouts/base-layout";
import Home from "../pages/home/home.page";
import DashboardLayout from "../layouts/dashboard-layout";
import Dashboard from "../pages/admin/dashboard";
import ManageUser from "../pages/admin/manage-user";
import SurveyManagement from "../pages/admin/manage-survey";
import AppointmentManagement from "../pages/admin/manage-appointment";

const MainRoute = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
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
