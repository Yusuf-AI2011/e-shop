"use client";
import { loseToken } from "@/tanstack/mutations/mutations";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FiBox } from "react-icons/fi";
import { PiChartPieSliceFill } from "react-icons/pi";

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
      <div className="relative w-[100%] h-[100vh] flex justify-start items-center flex-col gap-[150px] shadow-sm shadow-mist-400">
        <h1 className="text-[30px] text-blue-400">CarShop</h1>
        <div className="w-[100%] flex justify-center items-center flex-col gap-[20px]">
          <button className="w-[80%] h-[35px] rounded-[8px] text-mist-300 flex justify-start items-center gap-[10px] text-[17px] font-light">
            <span className="text-[20px]">
              <FiBox />
            </span>
            Products
          </button>
          <button className="w-[80%] h-[35px] rounded-[8px] text-mist-300 flex justify-start items-center gap-[10px] text-[17px] font-light">
            <span className="text-[20px]">
              <PiChartPieSliceFill />
            </span>
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
