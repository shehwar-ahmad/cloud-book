import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import DashboardPage from "pages/DashboardPage";
import ProtectedRoutes from "./ProtectedRoutes";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<DashboardPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}

export default AppRoutes;
