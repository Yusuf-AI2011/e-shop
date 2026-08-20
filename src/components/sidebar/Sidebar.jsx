"use client";
import { loseToken } from "@/tanstack/mutations/mutations";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  const deleteToken = useMutation({
    mutationFn: loseToken,
    onSuccess: () => {
      router.push(`/login`);
      router.refresh();
    },
  });
  function LogoutFunction() {
    deleteToken.mutate();
  }
  return (
    <div className="w-[100%] h-[100vh]">
      <div className="relative w-[100%] h-[100vh] flex justify-start items-center flex-col gap-[150px]">
        <h1 className="text-[30px] text-mist-300">E-Shop</h1>
        <div className="w-[100%] flex justify-center items-center flex-col gap-[20px]">
          <button className="w-[80%] h-[35px] rounded-[8px] border-mist-300 border-1 text-mist-300">
            Products
          </button>
          <button className="w-[80%] h-[35px] rounded-[8px] border-mist-300 border-1 text-mist-300">
            Categories
          </button>
        </div>
        <div className=" absolute bottom-[20px] w-[90%] pt-[30px] flex justify-center items-center border-t-1 border-red-500">
          <button
            onClick={LogoutFunction}
            className="w-[80%] h-[30px rounded-[8px] border-1 border-red-500 text-red-500"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
