import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import DashboardPage from "pages/DashboardPage";
import ProtectedRoutes from "./ProtectedRoutes";
import SignupPage from "pages/SignupPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
      </Route>

      <Route path="login" element={<LoginPage />} />
      <Route path="sign-up" element={<SignupPage />} />
    </Routes>
  );
}

export default AppRoutes;
