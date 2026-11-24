"use client";

import React, { useState } from "react";
import { Select, Modal } from "antd";
// import "../../app/style/table.css";
// import "../../app/style/modal.css";

const matches = [
  {
    type: "Free Challenge",
    typeColor: "text-blue-500",
    duration: "3 min",
    entryFee: 0,
    commission: 0,
    payout: "100%",
  },
  {
    type: "Pride Match",
    typeColor: "text-pink-500",
    duration: "3 min",
    entryFee: 0,
    commission: 0,
    payout: "100%",
  },
  {
    type: "Cash Match",
    typeColor: "text-green-500",
    duration: "2.5 min",
    entryFee: 5,
    commission: 10,
    payout: 90,
  },
  {
    type: "Cash Match",
    typeColor: "text-green-500",
    duration: "5 min",
    entryFee: 15,
    commission: 10,
    payout: 90,
  },
];

export default function MatchSetting() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<any>(null);
  const { Option } = Select;

  const showModal = (match: any | null) => {
    setSelectedMatch(match);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    // Save logic would go here
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="px-6 py-8 bg-[#1b1d29] text-white">
      <div className="mb-6 flex-wrap gap-4">
        <div className="flex gap-4 sm:flex-row flex-col items-center justify-between">
          <h1 className="text-[32px] font-bold">Matches</h1>
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

        <div className="flex justify-end mt-5">
          <button
            onClick={() => showModal(null)} // opens modal in create mode
            className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded-full hover:bg-blue-600 transition-all"
          >
            Create new match
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {matches.map((match, index) => (
          <div
            key={index}
            className="rounded-2xl border-2 border-gray-600 bg-[#2C323A] p-4 shadow-md py-7 px-5 flex flex-col gap-4"
          >
            <p className="text-[#676E7C] flex justify-between">
              Match Type:{" "}
              <span className={`font-semibold ${match.typeColor}`}>
                {match.type}
              </span>
            </p>
            <p className="text-[#676E7C] flex justify-between">
              Duration: <span className="text-white">{match.duration}</span>
            </p>
            <p className="text-[#676E7C] flex justify-between">
              Entry Fee ($):{" "}
              <span className="text-white">{match.entryFee}</span>
            </p>
            <p className="text-[#676E7C] flex justify-between">
              Commission (%):{" "}
              <span className="text-white">{match.commission}</span>
            </p>
            <p className="text-[#676E7C] mb-4 flex justify-between">
              Total Payout (%):{" "}
              <span className="text-white">{match.payout}</span>
            </p>
            <button
              onClick={() => showModal(match)} // opens modal in edit mode
              className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full transition-all"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        // title={selectedMatch ? "Edit Match" : "Create Match"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
        cancelText="Cancel"
        centered
        footer={null}
        className="custom-modal !max-w-[962px] !w-full  !p-5"
      >
        <h2 className="text-white text-[20px] px-5 py-2">Create Match </h2>
        <hr className="mt-3 h-[2px] bg-gray-500" />
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 p-5">
          {/* Match Type */}
          <div className="flex flex-col">
            <label className="text-white mb-1 text-[14px] ml-3">
              Match Type
            </label>
            <Select
              defaultValue={selectedMatch?.type || "Free"}
              className="w-full text-white rounded-full custom-ant-select "
              popupClassName="custom-ant-select-dropdown"
            >
              <Select.Option value="Free" className="text-gray-400">
                Free
              </Select.Option>
              <Select.Option value="Pride">Pride Match</Select.Option>
              <Select.Option value="Cash">Cash Match</Select.Option>
            </Select>
          </div>

          {/* Duration */}
          <div className="flex flex-col">
            <label className="text-white mb-1 text-[14px] ml-3">
              Duration (Sec)
            </label>
            <input
              type="text"
              placeholder="Enter Match Duration"
              defaultValue={selectedMatch?.duration}
              className="bg-[#2A2A2A] text-white px-4 py-2 rounded-full outline-none"
            />
          </div>

          {/* Entry Fee */}
          <div className="flex flex-col">
            <label className="text-white mb-1 text-[14px] ml-3">
              Entry Fee ($)
            </label>
            <input
              type="number"
              placeholder="Enter match fee"
              defaultValue={selectedMatch?.entryFee}
              className="bg-[#2A2A2A] text-white px-4 py-2 rounded-full outline-none"
            />
          </div>

          {/* Commission */}
          <div className="flex flex-col">
            <label className="text-white mb-1 text-[14px] ml-3">
              Commission (%)
            </label>
            <input
              type="number"
              placeholder="Enter Commission"
              defaultValue={selectedMatch?.commission}
              className="bg-[#2A2A2A] text-white px-4 py-2 rounded-full outline-none"
            />
          </div>

          {/* Payout */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-white mb-1 text-[14px] ml-3">
              Total Payout (%)
            </label>
            <input
              type="number"
              placeholder="Set total payout"
              // defaultValue={selectedMatch?.payout}
              className="bg-[#2A2A2A] text-white px-4 py-2 rounded-full outline-none"
            />
          </div>
        </form>

        {/* Modal Footer Custom Buttons */}
        <div className="flex justify-end gap-4 mt-6 p-5">
          <button
            onClick={handleCancel}
            className="px-6 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleOk}
            className="px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all"
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
}
