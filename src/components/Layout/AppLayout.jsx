import React from "react";
import AppLogo from "components/Base/AppLogo";

const AppLayout = ({ children }) => {
  return (
    <div className="relative flex-1 min-h-screen w-full px-2 flex flex-col items-center justify-center bg-gray-900">
      <div className="relative text-center min-h-[19vh] flex flex-col items-center justify-center w-full max-w-[320px] lg:max-w-[500px]">
        <AppLogo /> 
      </div>

      <div className="w-full flex flex-col flex-1">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
