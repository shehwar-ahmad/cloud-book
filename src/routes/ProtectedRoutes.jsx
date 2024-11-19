import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const isAuthenticated = localStorage.getItem("token") ? true : false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};


export default PrivateRoutes;
