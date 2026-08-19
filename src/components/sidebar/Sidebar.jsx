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
    <div>
      <button
        onClick={LogoutFunction}
        className="w-[100px] h-[30px] rounded-[8px] border-1 border-red-700 text-red-700"
      >
        Log out
      </button>
    </div>
  );
};

export default Sidebar;
