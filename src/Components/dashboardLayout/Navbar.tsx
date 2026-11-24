import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-black p-3 flex justify-end">
      <div className="w-[200px] flex items-center gap-3 border-2 border-gray-400 rounded-[30px] p-2">
        <Image
          src="/assets/reward&budg/navimg.png"
          alt="Image"
          width={30}
          height={30}
          objectFit="cover"
          className="object-contain"
        />
        <h1 className="text-bold text-[16px]">Administration</h1>
      </div>
    </div>
  );
};

export default Navbar;
