"use client";

import React, { useState } from "react";
import { Select, Modal, Switch, Upload } from "antd";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import { IoArrowForwardSharp } from "react-icons/io5";
const { Option } = Select;

const groupData = [
  {
    name: "Fitness Enthusiasts",
    description: "Lorem ipsum lap top gum...",
    members: 25,
    image: "/assets/reward&budg/groupimg.png",
    avatars: [
      "/assets/reward&budg/groupimg.png",
      "/assets/reward&budg/groupimg.png",
      "/assets/reward&budg/groupimg.png",
    ],
  },
  {
    name: "Yoga Practitioners",
    description: "Focusing on mindfulness and...",
    members: 15,
    image: "/assets/reward&budg/groupimg.png",
    avatars: [
      "/assets/reward&budg/groupimg.png",
      "/assets/reward&budg/groupimg.png",
      "/assets/reward&budg/groupimg.png",
    ],
  },
  {
    name: "Healthy Eaters",
    description: "Exploring new recipes and...",
    members: 18,
    image: "/assets/reward&budg/groupimg.png",
    avatars: [
      "/assets/reward&budg/groupimg.png",
      "/assets/reward&budg/groupimg.png",
      "/assets/reward&budg/groupimg.png",
    ],
  },
  {
    name: "Weight Lifters",
    description: "Building strength and muscle",
    members: 20,
    image: "/assets/reward&budg/groupimg.png",
    avatars: [
      "/assets/reward&budg/groupimg.png",
      "/assets/reward&budg/groupimg.png",
      "/assets/reward&budg/groupimg.png",
    ],
  },
  {
    name: "Outdoor Adventurers",
    description: "Engaging in activities like",
    members: 22,
    image: "/assets/reward&budg/groupimg.png",
    avatars: [
      "/assets/reward&budg/groupimg.png",
      "/assets/reward&budg/groupimg.png",
      "/assets/reward&budg/groupimg.png",
    ],
  },
  {
    name: "Wellness Advocates",
    description: "Championing mental health",
    members: 12,
    image: "/assets/reward&budg/groupimg.png",
    avatars: [
      "/assets/reward&budg/groupimg.png",
      "/assets/reward&budg/groupimg.png",
      "/assets/reward&budg/groupimg.png",
      "/assets/reward&budg/groupimg.png",
      "/assets/reward&budg/groupimg.png",
    ],
  },
];

export default function ChatGroup() {
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
    <div className=" px-6 py-10 text-white">
      <div className="flex sm:flex-row flex-col justify-between items-center mb-8">
        <h1 className="text-[32px] font-bold">Groups</h1>
        <div className="flex items-center space-x-4 sm:mt-0 mt-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Group..."
              className="bg-[#1e293b] text-white pl-10 pr-4 py-1 px-3 rounded-full w-64 outline-none grayBg"
            />
            <FiSearch className="absolute top-2.5 left-3 text-gray-400 " />
          </div>
          <div className="rounded-full ">
            <Select
              defaultValue="All"
              className="custom-select-dropdown flex items-center !text-white "
              style={{ width: 120 }}
              dropdownClassName="custom-select-options"
            >
              <Option value="Active">Active</Option>
              <Option value="InActive">In Active</Option>
              <Option value="Premium">Premium</Option>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalVisible(true)}
          className="bg-blue-500 text-white cursor-pointer py-2 px-4 rounded-full hover:bg-blue-600"
        >
          Create Group
        </button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-6 mt-6">
        {groupData.map((group, idx) => (
          <div
            key={idx}
            className="bg-[#1e293b] rounded-[30px] border-2 border-gray-400 flex items-center px-5 py-3"
          >
            <div className="w-24 h-24 flex-shrink-0 relative">
              <Image
                src={group.image}
                alt={group.name}
                fill
                objectFit="cover"
                className="rounded-l-xl"
              />
            </div>
            <div className="flex-1 px-4 py-3 space-y-1">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-[16px]">{group.name}</h3>
                <div className="flex gap-2">
                  {idx === 0 ? (
                    <IoArrowForwardSharp className="text-white mt-1 p-1 cursor-pointer bg-blue-600 h-7 w-7 rounded-full" />
                  ) : (
                    <CiLock className="text-white mt-1 cursor-pointer p-1 bg-blue-600 h-7 w-7 rounded-full" />
                  )}
                </div>
              </div>
              <div className="text-[10px] text-gray-400">
                <p className=" ">{group.description}</p>
                <span className=" ">Members({group.members})</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex -space-x-2">
                  {group.avatars.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt="avatar"
                      width={28}
                      height={28}
                      className="rounded-full border-1 border-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Group Creation Modal */}
      <Modal
        title={null}
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        className="badge-modal !max-w-[971px] !w-full !px-5"
      >
        <div className="bg-[#1B1D29] rounded-lg text-white">
          {" "}
          <h2 className="px-7 font-bold">Create Group</h2>
          <hr className="w-full h-2 textgray-500 mt-1" />
          <div className=" px-10 py-5  mt-5 ">
            {/* Badge Name */}
            <div className="flex  gap-10">
              <div className=" w-1/2">
                {" "}
                <label className="block mb-2">Badge Name</label>
                <input
                  type="text"
                  placeholder="Enter Badge Title"
                  value={badgeForm.name}
                  onChange={(e) =>
                    setBadgeForm({ ...badgeForm, name: e.target.value })
                  }
                  className="w-full mb-4 p-2 px-4 rounded-full grayBg border  text-white outline-none"
                />
              </div>
              <div className=" w-1/2">
                <label className=" mb-2">Badge Icon</label>
                <div className="mt-2 ">
                  <Image
                    src="/assets/dashboard/modal/modalBadge.png"
                    alt="badge icon"
                    width={100}
                    height={200}
                    className=""
                  />
                </div>
                <p className="text-xs mt-3  text-gray-400">
                  Max Size: 4.00 MB. Extension: png, jpg, jpeg
                </p>
              </div>
            </div>

            <div className="flex justify-between gap-10 mt-7 ">
              {/* Criteria */}
              <div className="w-1/2">
                <label className="block mb-2">Criteria</label>
                <input
                  type="text"
                  placeholder="Enter Criteria to Earn this badge"
                  value={badgeForm.criteria}
                  onChange={(e) =>
                    setBadgeForm({ ...badgeForm, criteria: e.target.value })
                  }
                  className="w-full mb-4 p-2 px-4 rounded-full grayBg text-white outline-none"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-2">Status</label>
                <div className="grayBg rounded-full flex items-center px-5 h-10">
                  <Switch
                    checked={badgeForm.status}
                    onChange={(checked) =>
                      setBadgeForm({ ...badgeForm, status: checked })
                    }
                    className="bg-[#1890ff]"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <label className="block mb-2">Description</label>
            <textarea
              rows={4}
              placeholder="Add Description"
              value={badgeForm.description}
              onChange={(e) =>
                setBadgeForm({ ...badgeForm, description: e.target.value })
              }
              className="w-full p-2 px-4 rounded-lg grayBg text-white outline-none resize-none"
            />

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={handleModalClose}
                className="border border-red-500 text-red-500 px-6 py-2 rounded-full hover:bg-red-600 hover:text-white transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  console.log("Badge saved:", badgeForm);
                  handleModalClose();
                  alert("Saved.....!");
                }}
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
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
