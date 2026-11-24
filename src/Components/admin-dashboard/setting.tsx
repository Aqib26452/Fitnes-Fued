"use client";

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type FieldKey = "current" | "new" | "confirm";

export default function Setting() {
  const [visibility, setVisibility] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const toggleVisibility = (field: FieldKey) => {
    setVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <div className="p-6  text-white  space-y-4">
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
        <h1 className="text-[32px] font-semibold">Account Settings</h1>
        <button
          onClick={() => {
            console.log("Changes saved");

            alert("Saved changes.....!");
          }}
          className="bg-blue-500 text-white cursor-pointer py-2 px-4 rounded-full hover:bg-blue-600"
        >
          Saved Changes
        </button>
      </div>
      <div className="mt-16 bg-[#2C3138] p-5 border-2 border-gray-400 rounded-[30px] xl:[height:calc(100vh_-_280px)]">
        <div className="xl:mt-16 mt-5">
          <label htmlFor="current" className="block text-sm ml-2">
            Current Password
          </label>
          <div className="relative w-[401px]  bg-gray-800 text-white px-4 py-2 rounded-[50px] border-1 border-gray-400 mt-2">
            <input
              type={visibility.current ? "text" : "password"}
              id="current"
              name="current"
              onChange={handleChange}
              placeholder="Enter your password"
              className="outline-none w-full"
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-xl"
              onClick={() => toggleVisibility("current")}
            >
              {visibility.current ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </button>
          </div>
        </div>

        <div className="mt-16">
          <label htmlFor="new" className="block text-sm ml-2">
            New Password
          </label>
          <div className="relative w-[401px]  bg-gray-800 text-white px-4 py-2 rounded-[50px] border-1 border-gray-400 mt-2">
            <input
              type={visibility.new ? "text" : "password"}
              id="new"
              name="new"
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full outline-none "
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-xl"
              onClick={() => toggleVisibility("new")}
            >
              {visibility.new ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>

        <div className="mt-16">
          <label htmlFor="confirm" className="block text-sm ml-2">
            Confirm Password
          </label>
          <div className="relative  w-[401px]  bg-gray-800 text-white px-4 py-2 rounded-[50px] border-1 border-gray-400 mt-2">
            <input
              type={visibility.confirm ? "text" : "password"}
              id="confirm"
              name="confirm"
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full outline-none"
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-xl"
              onClick={() => toggleVisibility("confirm")}
            >
              {visibility.confirm ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
