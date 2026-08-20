import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Dashboard from "../dashboard/page";

const adminPanel = () => {
  return (
    <div>
      <div className="w-[100%] h-[100vh flex justify-start items-start]">
        <div className="w-[10%] h-[100vh] bg-mist-700">
          <Sidebar />
        </div>
        <div className="w-[100%] h-[100vh]">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default adminPanel;
