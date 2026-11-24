"use client";

import React, { useState } from "react";
import { Table, Input, Modal, Switch, Upload } from "antd";
import { FiSearch } from "react-icons/fi";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { UploadOutlined } from "@ant-design/icons";
import Image from "next/image";
import type { ColumnsType } from "antd/es/table";
import "../../app/style/table.css";

const { Search } = Input;

interface BadgeItem {
  key: string;
  name: string;
  image: string;
  criteria: string;
  status: string;
}

const badgeData: BadgeItem[] = [
  {
    key: "1",
    name: "First Flame",
    image: "/assets/reward&budg/Title.png",
    criteria: "Complete your first battle",
    status: "Active",
  },
  {
    key: "2",
    name: "Iron Warrior",
    image: "/assets/reward&budg/Title.png",
    criteria: "Win 3 battles in a row",
    status: "Active",
  },
  {
    key: "3",
    name: "Speed Runner",
    image: "/assets/reward&budg/Title.png",
    criteria: "Win a match under 1 minute",
    status: "Active",
  },
  {
    key: "4",
    name: "Strategist",
    image: "/assets/reward&budg/Title.png",
    criteria: "Win without taking any damage",
    status: "Active",
  },
  {
    key: "5",
    name: "Resilient",
    image: "/assets/reward&budg/Title.png",
    criteria: "Come back after 3 losses to win",
    status: "Active",
  },
  {
    key: "6",
    name: "Veteran",
    image: "/assets/reward&budg/Title.png",
    criteria: "Play 100 matches",
    status: "Active",
  },
  {
    key: "7",
    name: "Sharpshooter",
    image: "/assets/reward&budg/Title.png",
    criteria: "Land 90% accurate hits",
    status: "Active",
  },
  {
    key: "8",
    name: "Streak Master",
    image: "/assets/reward&budg/Title.png",
    criteria: "Maintain a 10-win streak",
    status: "Active",
  },
  {
    key: "9",
    name: "Perfect Score",
    image: "/assets/reward&budg/Title.png",
    criteria: "Score maximum points in one match",
    status: "Active",
  },
  {
    key: "10",
    name: "Unstoppable",
    image: "/assets/reward&budg/Title.png",
    criteria: "Win 20 matches without defeat",
    status: "Active",
  },
];

export default function Reward() {
  const [searchText, setSearchText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
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

  const columns: ColumnsType<BadgeItem> = [
    {
      title: "Badge Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (text) => <div className="text-white text-center">{text}</div>,
    },
    {
      title: "Badge",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (src) => (
        <div className="flex justify-center">
          <Image src={src} alt="badge" width={100} height={100} />
        </div>
      ),
    },
    {
      title: "Criteria",
      dataIndex: "criteria",
      key: "criteria",
      align: "center",
      render: (text) => <div className="text-white text-center">{text}</div>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (text) => (
        <div className="text-green-500 font-semibold text-center">{text}</div>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: () => (
        <div className="flex justify-center gap-3 text-lg">
          <FiTrash2 className="text-red-500 cursor-pointer" />
          <FiEdit className="text-blue-400 cursor-pointer" />
        </div>
      ),
    },
  ];

  const filteredData = badgeData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#1B1D29] p-6 text-white ">
      <div className="flex justify-between lg:flex-row flex-col items-center  gap-4 mb-6">
        <h1 className="text-[32px] font-semibold">Badge & Reward Management</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by title"
            className="bg-[#1e293b] text-white pl-10 pr-4 py-1 px-3 rounded-full w-64 outline-none grayBg"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <FiSearch className="absolute top-2 left-3 text-white " />
        </div>
      </div>

      <div className="flex justify-end mt-5">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all"
          onClick={() => setIsModalVisible(true)}
        >
          Add new badge
        </button>
      </div>

      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={false}
        className="custom-table mt-5"
      />

      {/* Badge Creation Modal */}
      <Modal
        title={null}
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        className="badge-modal !max-w-[971px] !w-full"
      >
        <div className="bg-[#1B1D29] rounded-lg text-white">
          {" "}
          <h2 className="px-7 font-bold">Create Badge</h2>
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
