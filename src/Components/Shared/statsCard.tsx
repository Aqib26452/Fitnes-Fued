"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

// Define prop types
type StatCardProps = {
  icons: string;
  user: string;
  total: string | number;
  stats?: string;

  chartImage: string | StaticImageData;
};

const StatCard: React.FC<StatCardProps> = ({
  icons,
  user,
  total,
  stats,
  chartImage,
}) => {
  return (
    <div className="w-full bg-white shadow-md rounded-[10px] p-6">
      {/* Title Section */}
      <div className="flex gap-2">
        <p className="text-black font-[Roboto] text-[16px] font-normal ml-2">
          {icons}
        </p>
        <p className="text-black font-[Roboto] text-[16px] font-normal ml-2">
          {user}
        </p>
        <p className="text-black text-[24px] font-bold font-[Roboto] mt-2">
          {total}
        </p>
      </div>

      <div className="flex justify-between items-center">
        {/* Left: Stats & Time */}
        {/* <div className="flex items-center">
          {stats && (
            <span className="flex items-center mr-2 text-[10px] text-[#66D710]">
              <Image
                src="/assets/icons/up-arrow.svg"
                width={12}
                height={12}
                alt="arrow-up"
              />
              {stats}
            </span>
          )}
        </div> */}

        {/* Right: Chart */}
        <div className="mt-4">
          <div className="rounded-[8px] h-[50px]">
            <Image src={chartImage} width={72} height={55} alt="chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
