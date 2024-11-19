import React from "react";
import AppRoutes from "routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
