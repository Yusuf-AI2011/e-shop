import React from "react";
import Products from "../products/page";

const page = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-mist-900 flex justify-center items-center p-[50px] overflow-auto scrollbar-none">
      <Products />
    </div>
  );
};

export default page;
