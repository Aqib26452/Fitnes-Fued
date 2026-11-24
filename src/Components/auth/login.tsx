"use client";

import Image from "next/image";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useRouter } from "next/navigation";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.push("/admin-dashboard");
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex h-screen w-full bg-[#171717]">
      {/* Left Side with Image */}
      <div className="relative w-1/2 h-full">
        <Image
          src="/assets/auth/loginpageimg.png"
          alt="chart"
          fill
          className="object-cover pointer-events-none"
        />
      </div>

      {/* Right Side */}
      <div className="w-1/2 h-full flex justify-center items-center relative z-0">
        <div className="w-[401px]">
          <Image
            src="/assets/dashboard/logo.png"
            alt="chart"
            width={200}
            height={100}
            className="object-cover mx-auto"
          />
          <h2 className="mt-16 font-semibold text-center text-[32px] text-white">
            Login
          </h2>

          {/* Email Input */}
          <div className="flex flex-col mt-6">
            <label htmlFor="" className="ml-3 text-[14px] text-white mb-2">
              Email
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full border !py-3 !px-5 !bg-transparent !text-white !rounded-[50px] !focus:!shadow-none !focus:!outline-none placeholder:!text-gray-400 mt-2"
            />
          </div>

          {/* Password Input with Toggle */}
          <div className="flex flex-col w-full mt-5">
            <label htmlFor="" className="ml-3 text-[14px] text-white">
              Password
            </label>
            <div className="w-full border py-2 px-5 rounded-[50px] flex items-center mt-2 hover:border-blue-400">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full !border-none !bg-transparent !text-white !shadow-none !focus:!outline-none !focus:!shadow-none placeholder:!text-gray-400"
              />
              <div
                onClick={togglePassword}
                className="text-white cursor-pointer text-xl ml-2"
              >
                {showPassword ? <GoEyeClosed /> : <GoEye />}
              </div>
            </div>

            {/* Login Button */}
            <Button
              onClick={handleLogin}
              className="w-full !cursor-pointer !bg-blue-500 hover:bg-blue-600 !text-white !py-5 !rounded-full transition-all mt-12 !border-blue-400"
            >
              Log in
            </Button>
          </div>
        </div>

        {/* Blur Images */}
        <Image
          src="/assets/auth/blurTop.png"
          alt="chart"
          width={500}
          height={500}
          className="absolute top-0 right-0 -z-10 pointer-events-none"
        />
        <Image
          src="/assets/auth/blurBottom.png"
          alt="chart"
          width={800}
          height={800}
          className="absolute bottom-0 left-[-250px] -z-10 pointer-events-none"
        />
      </div>
    </div>
  );
}
