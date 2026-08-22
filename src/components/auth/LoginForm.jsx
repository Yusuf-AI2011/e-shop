"use client";
import { useState } from "react";
import { MdLockPerson } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { GetToken } from "@/tanstack/mutations/mutations";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [authData, setAuthData] = useState({
    login: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [eyeSlash, setEyeSlash] = useState(true);
  const router = useRouter();

  const PostLogin = useMutation({
    mutationFn: (authData) => GetToken(authData),
    onSuccess: (success) => {
      setIsLoading(false);
      // const token = success.data.accessToken;
      toast.success("Welcome!");

      setTimeout(() => {
        router.push("/admin");
      }, [1000]);
    },
    onError: (error) => {
      console.log(error);
      setIsLoading(false);
      toast.error(error.message);
    },
  });

  function HandleInput(e) {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    });
  }
  function GetStartedNow(e) {
    e.preventDefault();
    setIsLoading(true);
    PostLogin.mutate(authData);
  }

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-[#f2e3e3]">
      <Toaster position="top-right" />
      <form className="w-[300px] p-[20px]  text-mist-800 border-2 border-[#a39f9f] rounded-[8px] shadow-[3px_3px_0_#a39f9f] flex justify-center items-center flex-col gap-[15px]">
        <span className="text-[30px] text-red-600">
          <MdLockPerson />
        </span>
        <p>Authorise to enter admin panel.</p>
        <div className="w-[100%] py-[10px] border-b-1 border-[#a39f9f]">
          <p>
            email <span className="text-yellow-600 font-bold">*</span>
          </p>
          <input
            className="w-[100%] px-[5px] outline-0"
            value={authData.login}
            onChange={HandleInput}
            name="login"
            placeholder="login"
            type="text"
          />
        </div>
        <div className="relative w-[100%] py-[10px] border-b-1 border-[#a39f9f]">
          <p>
            Password <span className="text-yellow-600 font-bold">*</span>
          </p>
          <span
            onClick={() => {
              setEyeSlash(!eyeSlash);
            }}
            className="absolute right-[10px] text-[25px]"
          >
            {eyeSlash ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
          <input
            className="w-[100%] px-[5px] outline-0"
            value={authData.password}
            onChange={HandleInput}
            name="password"
            placeholder="password"
            type={eyeSlash ? "password" : "text"}
          />
        </div>
        <button
          onClick={GetStartedNow}
          className="w-[100%] h-[35px] border-1 border-[#a39f9f] shadow-[3px_3px_0_#a39f9f] rounded-[8px]"
        >
          {isLoading ? "Loading..." : "Get started now!"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
