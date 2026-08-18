import React from "react";
import Sidebar from "../sidebar/Sidebar";

const adminPanel = () => {
  return (
    <div>
      <div className="w-[100%] h-[100vh flex justify-start items-start]">
        <div className="w-[10%] h-[100vh] bg-mist-700">
          <Sidebar />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default adminPanel;
