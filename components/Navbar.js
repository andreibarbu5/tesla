import Image from "next/image";
import React from "react";

import tsla from "../assets/tsla.png";

const Navbar = ({ openSidebar }) => {
  return (
    <div className="flex pt-5 items-center justify-between px-5 sm:p-6 -mt-6 relative z-30">
      <div className="w-32">
        <Image src={tsla} />
      </div>

      <div className="hidden md:inline-flex">
        <ul className="flex space-x-6 font-medium text-gray-800">
          <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Charging</li>
        </ul>
      </div>

      <div
        className="bg-gray-500/20 py-1 px-3 rounded-[0.4rem]"
        onClick={() => openSidebar()}
      >
        <button className="">Menu</button>
      </div>
    </div>
  );
};

export default Navbar;
