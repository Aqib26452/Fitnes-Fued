"use client";

import React, { useState } from "react";
import { Table, Input, Modal, Switch, Upload } from "antd";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const plans = [
  {
    title: "Free Plan",
    price: "$0.00",
    frequency: "/mon",
    features: [
      "3 free challenges per week",
      "Access to Solo Practice mode",
      "Spectate all live battles ",
      "Basic badges and rewards",
      "Limited customer support",
    ],
    color: "text-red-500",
  },
  {
    title: "Basic Plan",
    price: "$5.00",
    frequency: "/mon",
    features: [
      "5 challenges per week",
      "Access to Solo Practice with stake options",
      "Spectate live battles with stats overlay",
      "Earn advanced badges and rewards",
      "Priority customer support",
    ],
    color: "text-green-500",
  },
  {
    title: "Premium Plan",
    price: "$10.00",
    frequency: "/mon",
    features: [
      "Unlimited challenges and rematches",
      "Participate in cash battles with real stakes",
      "Full Solo Practice with partial refunds on accuracy",
      "Spectate with live commentary and stats overlay",
      "Unlock all badges and exclusive rewards",
    ],
    color: "text-blue-500",
  },
];

export default function Plane() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [badgeForm, setBadgeForm] = useState({
    name: "",
    criteria: "",
    description: "",
    status: true,
    image: "/assets/reward&budg/Title.png",
  });

  const handleModalClose = () => {
    setIsModalVisible(false);
    setBadgeForm({
      name: "",
      criteria: "",
      description: "",
      status: true,
      image: "/assets/dashboard/modal/modalBadge.png",
    });
  };
  return (
    <div className=" text-white py-10 px-4">
      <div className=" mx-auto text-center">
        <h1 className="text-4xl font-bold mb-10">Subscription Plans</h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#2C323A] px-6 py-8 rounded-[30px] shadow-md flex flex-col justify-between border-2 border-gray-400"
            >
              <div>
                <h2 className="text-[32px] font-semibold ">{plan.title}</h2>
                <p className=" text-white text-[14px] mt-2">
                  {index === 0
                    ? "Get started with basic features and limited challenges."
                    : index === 1
                    ? "More challenges and perks for casual competitors."
                    : "Unlimited access, cash battles, and exclusive features."}
                </p>
                <div className="mt-5 flex items-center justify-center gap-1">
                  <span className={`text-[48px] font-bold ${plan.color}`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-[25px]">
                    {plan.frequency}
                  </span>
                </div>
                <button
                  onClick={() => setIsModalVisible(true)}
                  className="w-full mt-5 py-2 cursor-pointer border border-blue-500 rounded-[30px] hover:bg-blue-600 transition duration-200 text-blue-600 hover:text-white"
                >
                  Edit Plan
                </button>
                <ul className="text-sm space-y-2 mt-8 flex flex-col gap-6 ml-5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <FaCheckCircle className="bg-white rounded-full w-4 h-4 text-blue-500 " />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        title={null}
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        className="badge-modal !max-w-[971px] !w-full !px-5 "
      >
        <div className="bg-[#171717] rounded-[30px] text-white ">
          {" "}
          <h2 className="px-7 font-bold">Create Plane</h2>
          <hr className="w-full h-2 textgray-500 mt-1" />
          <div className=" px-10 md:py-16 py-5  mt-5 ">
            {/* Badge Name */}
            <div className="flex  sm:gap-10 gap-2 sm:flex-row flex-col">
              <div className=" sm:w-1/2 w-full">
                {" "}
                <label className="block mb-2">Plane Type</label>
                <input
                  type="text"
                  placeholder="Enter Badge Title"
                  value={badgeForm.name}
                  onChange={(e) =>
                    setBadgeForm({ ...badgeForm, name: e.target.value })
                  }
                  className="w-full sm:mb-4 p-4 rounded-full grayBg border  text-white outline-none"
                />
              </div>
              <div className=" sm:w-1/2 w-full">
                {" "}
                <label className="block mb-2">Description</label>
                <input
                  type="text"
                  placeholder="Enter Description"
                  className="w-full mb-4 p-4 rounded-full grayBg border  text-white outline-none"
                />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-10 gap-2 sm:mt-7 ">
              {/* Criteria */}
              <div className="sm:w-1/2 w-full">
                <label className="block mb-2">Price ($)/monthly</label>
                <input
                  type="text"
                  placeholder="Enter plane price"
                  value={badgeForm.criteria}
                  onChange={(e) =>
                    setBadgeForm({ ...badgeForm, criteria: e.target.value })
                  }
                  className="w-full sm:mb-4 p-4 rounded-full grayBg text-white outline-none"
                />
              </div>
              <div className=" sm:w-1/2 w-full">
                {" "}
                <label className="block mb-2">Features</label>
                <input
                  type="text"
                  placeholder="Enter Match Duration"
                  className="w-full mb-4 p-4 rounded-full grayBg border  text-white outline-none"
                />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex sm:flex-row flex-col  justify-end gap-3 sm:mt-20 mt-10">
              <button
                onClick={handleModalClose}
                className="border border-red-500 text-red-500 px-20 py-3 rounded-full hover:bg-red-600 hover:text-white transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  console.log("Badge saved:", badgeForm);
                  handleModalClose();
                  alert("Plane Saved.....!");
                }}
                className="bg-blue-500 text-white px-20 py-3 rounded-full hover:bg-blue-600 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
