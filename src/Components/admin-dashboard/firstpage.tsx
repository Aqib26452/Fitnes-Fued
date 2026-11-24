"use client";

import { Table, Input, Select, Modal } from "antd";
import { FiSearch } from "react-icons/fi";

import { FiEye, FiTrash2 } from "react-icons/fi";
import Image from "next/image";
import React, { useState } from "react";
import { GrGroup } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsEmojiExpressionless } from "react-icons/bs";

import "../../app/style/table.css";

const { Option } = Select;

const Firstpage = () => {
  const [searchText, setSearchText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isDeleteConfirmVisible, setIsDeleteConfirmVisible] = useState(false);

  const data = [
    {
      key: "1",
      name: "Abdullah",
      email: "abdullah123@gmail.com",
      status: "Active",
      plan: "Free",
    },
    {
      key: "2",
      name: "Bessie Cooper",
      email: "debra.holt@example.com",
      status: "Active",
      plan: "Premium",
    },
    {
      key: "3",
      name: "Darlene Robertson",
      email: "deanna.curtis@example.com",
      status: "Inactive",
      plan: "Free",
    },
    {
      key: "4",
      name: "Devon Lane",
      email: "nathan.roberts@example.com",
      status: "Active",
      plan: "Free",
    },
    {
      key: "5",
      name: "Robert Fox",
      email: "jackson.graham@example.com",
      status: "Inactive",
      plan: "Free",
    },
    {
      key: "6",
      name: "Ronald Richards",
      email: "bill.sanders@example.com",
      status: "Active",
      plan: "Premium",
    },
    {
      key: "7",
      name: "Arlene McCoy",
      email: "jessica.hanson@example.com",
      status: "Inactive",
      plan: "Free",
    },
    {
      key: "8",
      name: "Albert Flores",
      email: "curtis.weaver@example.com",
      status: "Active",
      plan: "Free",
    },
    {
      key: "9",
      name: "Jane Cooper",
      email: "georgia.young@example.com",
      status: "Active",
      plan: "Premium",
    },
    {
      key: "10",
      name: "Jane Cooper",
      email: "georgia.young@example.com",
      status: "Active",
      plan: "Premium",
    },
    {
      key: "11",
      name: "Jane Cooper",
      email: "georgia.young@example.com",
      status: "Active",
      plan: "Premium",
    },
    {
      key: "12",
      name: "Jane Cooper",
      email: "georgia.young@example.com",
      status: "Active",
      plan: "Premium",
    },
    {
      key: "13",
      name: "Jane Cooper",
      email: "georgia.young@example.com",
      status: "Active",
      plan: "Premium",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_: string, record: any) => (
        <span
          className="text-white cursor-pointer hover:text-blue-300"
          onClick={() => {
            setSelectedUser(record);
            setIsModalVisible(true);
          }}
        >
          {record.name}
        </span>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text: string) => <span className="text-white">{text}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span
          className={`font-semibold ${
            status === "Active" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Plan",
      dataIndex: "plan",
      key: "plan",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex gap-3">
          <FiTrash2 className="text-red-500 cursor-pointer" />
          <FiEye className="text-blue-400 cursor-pointer" />
        </div>
      ),
    },
  ];

  const filteredData = data.filter(
    (user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const stats = [
    {
      icons: <GrGroup />,
      user: "Total User",
      count: 65245,
      color: "text-blue-400",
      chart: "/assets/dashboard/statsgraph.png",
    },
    {
      icons: <GrGroup />,
      user: "Total User",
      count: 65245,
      color: "text-blue-400",
      chart: "/assets/First-Page/cardimg1.png",
    },
    {
      icons: <GrGroup />,
      user: "Total User",
      count: 65245,
      color: "text-blue-400",
      chart: "/assets/First-Page/cardimg1.png",
    },
    {
      icons: <GrGroup />,
      user: "Total User",
      count: 65245,
      color: "text-blue-400",
      chart: "/assets/First-Page/cardimg1.png",
    },
  ];

  return (
    <div className="px-4">
      <div>
        <h2 className="text-[32px] font-semibold text-white">Analytics</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6 p">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#1C1F2A] border-[1px] border-white rounded-[15px] px-4 py-7 shadow flex justify-between items-end gap-3"
          >
            <div className="w-full">
              <p className="w-[52px] h-[52px] bg-green-500 text-[20px] rounded-full text-center flex justify-center items-center">
                {item.icons}
              </p>
              <h3 className={`font-semibold mt-1`}>{item.user}</h3>
              <h3 className={`text-2xl font-bold ${item.color}`}>
                {item.count}
              </h3>
            </div>
            <Image
              src="/assets/dashboard/statsgraph.png"
              alt="chart"
              width={200}
              height={200}
              className="mt-2 flex justify-end"
            />
          </div>
        ))}
      </div>

      {/* Users Table */}
      <div className="flex items-center justify-between mb-4 mt-4">
        <h2 className="text-2xl font-bold">Users</h2>
        <div className="flex gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search User..."
              className="bg-[#1e293b] text-white pl-10 pr-4 py-1 px-3 rounded-full w-64 outline-none grayBg"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <FiSearch className="absolute top-2 left-3 text-white " />
          </div>
          <Select
            defaultValue="All"
            className="custom-select-dropdown flex items-center !text-white"
            style={{ width: 120 }}
            dropdownClassName="custom-select-options"
          >
            <Option value="Active">Active</Option>
            <Option value="InActive">In Active</Option>
            <Option value="Premium">Premium</Option>
          </Select>
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 6 }}
        className="custom-table mt-5"
      />

      {/* User Detail Modal */}
      <Modal
        title={null}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={900}
        className=""
      >
        {selectedUser && (
          <div className="bg-[#1c1f2a] text-white rounded-lg ">
            <h2 className="text-[32px] font-semibold px-6 py-1">
              User Profile
            </h2>
            <hr className="h-[2px] bg-[#686868] text-[#686868]" />
            <div className="flex lg:flex-row flex-col  gap-6 mt-6 p-6">
              {/* Left Panel */}
              <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                  {" "}
                  <div className="flex flex-col items-center grayBg w-full lg:w-[240px] rounded-[20px] py-5">
                    <div className=" px-4 ">
                      <Image
                        src="/assets/dashboard/modal/userimg.png"
                        alt="chart"
                        width={200}
                        height={200}
                        className="w-full "
                      />
                      <h2 className="text-center">{selectedUser.name}</h2>
                      <p className="text-sm text-center mx-auto font-semibold text-[#FF006E] bg-[#3D2630] rounded-[70px] py-1  w-[100px]">
                        Free user
                      </p>
                    </div>
                    <hr className="h-[2px] bg-white text-white py-3" />
                    <div className="px-3">
                      {" "}
                      <div className="flex gap-2 items-center mt-2 justify-center">
                        <FaPhoneAlt />
                        <p className="text-sm "> +92-1215355353</p>
                      </div>
                      <div className="flex gap-2 items-center mt-2 justify-center">
                        <MdEmail />
                        <p className="text-sm "> {selectedUser.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:max-w-[453px] w-full flex flex-col gap-5">
                    {/* Plan Info */}
                    <div className="grayBg p-5 rounded-[20px] h-full flex flex-col justify-between">
                      <h4 className="font-semibold ">
                        Subscription & Plan Info
                      </h4>
                      <p className="mt-2 flex gap-4">
                        <span className="text-gray-400">Current Plan:</span>{" "}
                        {selectedUser.plan} User
                      </p>
                      <p className="mt-2 flex gap-4">
                        <span className="text-gray-400">Plan Start Date:</span>{" "}
                        Jan 15, 2025
                      </p>
                      <p className="mt-2 flex gap-4">
                        <span className="text-gray-400">Payment Status:</span>{" "}
                        N/A (free tier)
                      </p>
                    </div>
                    {/* Level */}
                    <div className="grayBg px-4 py-2 h-full flex flex-col justify-center">
                      <div className="">
                        <h4 className="font-semibold  text-[24px]">Level</h4>
                        <p className="flex gap-4">
                          <span className="text-gray-400 text-[17px] ">
                            Current Level:
                          </span>{" "}
                          3
                        </p>
                      </div>
                      <div className="w-12 h-12 flex items-center justify-center bg-orange-500 rounded-full text-xl font-bold mt-3">
                        3
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className=" flex flex-col gap-4">
                    <div className="grayBg px-4 py-3 rounded-lg">
                      <h4 className="font-semibold text-[24px]">
                        Badges Earned
                      </h4>
                      <div className="flex flex-wrap sm:justify-between justify-center gap-4 text-center mt-1">
                        {[
                          "First Flame",
                          "Iron Initiate",
                          "Quick Burn",
                          "Vendetta Vindicator",
                          "No Mercy",
                          "Flame Keeper",
                        ].map((badge, i) => (
                          <div
                            key={i}
                            className="flex flex-col items-center  gap-1"
                          >
                            <img
                              src={`/assets/dashboard/badge.png`}
                              alt={badge}
                              className="w-10 h-10"
                            />
                            <p className="text-xs mt-1">{badge}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="  mt-2 lg:block hidden ml-auto ">
                      <button
                        onClick={() => setIsDeleteConfirmVisible(true)}
                        className="text-red-600 px-7 py-2 rounded-full cursor-pointer border-2 border-red-500 hover:text-white hover:bg-red-500"
                      >
                        Delete User
                      </button>
                      <button
                        onClick={() => alert("block the user")}
                        className="bg-blue-600 px-7 py-2 ml-3 rounded-full cursor-pointer hover:bg-blue-800"
                      >
                        Block User
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel - Statistics */}
              <div className="grayBg p-4 rounded-lg w-full lg:w-1/3">
                <h4 className="font-semibold mb-2">Statistics:</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex justify-between mt-5">
                    <span className="text-gray-400">Total Matches Played:</span>{" "}
                    <span className="text-blue-400 font-semibold">48</span>
                  </li>
                  <li className="flex justify-between mt-5">
                    <span className="text-gray-400">Wins:</span>{" "}
                    <span className="text-green-400 font-semibold">22</span>
                  </li>
                  <li className="flex justify-between mt-5">
                    <span className="text-gray-400">Losses:</span>{" "}
                    <span className="text-red-400 font-semibold">26</span>
                  </li>
                  <li className="flex justify-between mt-5">
                    <span className="text-gray-400">
                      Current Challenge Streak:
                    </span>{" "}
                    <span className="text-orange-400 font-semibold">
                      3 days
                    </span>
                  </li>
                  <li className="flex justify-between mt-5">
                    <span className="text-gray-400">Vendetta Streak:</span>{" "}
                    <span className="text-yellow-400 font-semibold">2</span>
                  </li>
                </ul>

                <h4 className="font-semibold mt-4">Recent Activity Log:</h4>
                <ul className="text-xs mt-2 space-y-1 text-gray-300">
                  <li className="mt-5">
                    May 15, 2025 — Completed a $5 Pride match (win)
                  </li>
                  <li className="mt-5">May 14, 2025 — Logged in</li>
                  <li className="mt-5">
                    May 13, 2025 — Earned “Squat Champion” badge
                  </li>
                  <li className="mt-5">
                    May 12, 2025 — Earned “Squat Champion” badge
                  </li>
                  <li className="mt-5">
                    May 10, 2025 — Started Solo Practice session
                  </li>
                  <li className="mt-5">
                    May 07, 2025 — Earned “Squat Champion” badge
                  </li>
                  <li className="mt-5">May 05, 2025 — Logged in</li>
                </ul>
              </div>
              <div className="  mt-2 ml-auto block lg:hidden">
                <button
                  onClick={() => setIsDeleteConfirmVisible(true)}
                  className="text-red-600 px-7 py-2 rounded-full cursor-pointer border-2 border-red-500"
                >
                  Delete User
                </button>
                <button className="bg-blue-600 px-7 py-2 ml-3 rounded-full cursor-pointer">
                  Block User
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* //Confirmation */}
      <Modal
        open={isDeleteConfirmVisible}
        onCancel={() => setIsDeleteConfirmVisible(false)}
        footer={null}
        centered
        className="delete-modal"
      >
        <div className="text-center text-white p-6 bg-[#525252] rounded-[20px] ">
          <BsEmojiExpressionless className="mx-auto text-red-500 w-5 h-5 mt-8" />
          <h3 className="text-xl font-bold mt-3">
            Are you Sure to delete this User?
          </h3>
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={() => setIsDeleteConfirmVisible(false)}
              className=" text-blue-500 px-4 py-2 rounded-full border-2 border-blue-500 hover:text-white hover:bg-blue-600 cursor-pointer"
            >
              No, Go Back
            </button>
            <button
              onClick={() => {
                console.log("User Deleted");
                setIsDeleteConfirmVisible(false);
                setIsModalVisible(false);
                alert("Deleted Successfully...!");
              }}
              className="bg-red-500 text-white px-8 py-2 rounded-full cursor-pointer hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Firstpage;
