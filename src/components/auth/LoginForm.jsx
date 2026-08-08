"use client";
import { useState } from "react";
import { MdLockPerson } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";

const LoginForm = () => {
    
  const [authData, setAuthData] = useState({
    username: "",
    password: "",
  });
  const [eyeSlash, setEyeSlash] = useState(true);
  

  function HandleInput(e) {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    });
  }

  function GetStartedNow(e) {
    e.preventDefault();
    console.log("Bosildi!");
  }


  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-[#f2e3e3]">
      <form className="w-[300px] p-[20px]  text-mist-800 border-2 border-[#a39f9f] rounded-[8px] shadow-[3px_3px_0_#a39f9f] flex justify-center items-center flex-col gap-[15px]">
        <span className="text-[30px] text-red-600">
          <MdLockPerson />
        </span>
        <p>Authorise to enter admin panel.</p>
        <div className="w-[100%] py-[10px] border-b-1 border-[#a39f9f]">
          <p>
            Username <span className="text-yellow-600 font-bold">*</span>
          </p>
          <input
            className="w-[100%] px-[5px] outline-0"
            value={authData.username}
            onChange={HandleInput}
            name="username"
            placeholder="username"
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
          Get started now!
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
