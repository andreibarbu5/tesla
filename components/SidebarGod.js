import React from "react";
import ListBtn from "./ListBtn";
import { GrClose } from "react-icons/gr";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";

const SidebarGod = ({ openSidebar, isOpen }) => {
  const models = [
    { text: "Model S", hidden: "md:hidden" },
    { text: "Model 3", hidden: "md:hidden" },
    { text: "Model X", hidden: "md:hidden" },
    { text: "Model Y", hidden: "md:hidden" },
    { text: "Powerwall" },
    { text: "Energy" },
    { text: "Commercial Energy" },
    { text: "Utilities" },
    { text: "Charging", hidden: "md:hidden" },
    { text: "Find Us" },
    { text: "Support" },
    { text: "Investor Relations" },
    { text: "Account" },
    { text: "More", icon: <MdOutlineArrowForwardIos /> },
  ];
  return (
    <div className="hidden sm:flex overflow-x-hidden    ">
      <div
        className={`absolute ${
          isOpen ? "w-full h-screen" : ""
        }   bg-gray-900/20 backdrop-blur-sm  `}
        onClick={() => openSidebar()}
      ></div>
      <div className="relative z-40">
        ​
        <div
          className={`${
            isOpen
              ? "fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-500 ease-out"
              : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-500 ease-out"
          }
           pl-10 pr-8 pt-10
          `}
        >
          <div className="flex justify-end " onClick={() => openSidebar()}>
            <div className="hover:bg-gray-400/50 p-2 rounded-[0.3rem] duration-200 ease-out">
              <GrClose />
            </div>
          </div>
          <div className=" space-y-[0.6rem] pt-8">
            {models.map((model) => (
              <ListBtn
                title={model.text}
                icon={model.icon}
                hidden={model.hidden}
              />
            ))}
          </div>
          <div className="flex  mt-4 hover:bg-gray-300/50 rounded-[0.5rem] py-1 px-2 text-gray-600 text-[15px] duration-200 ease-out ">
            <TfiWorld className="mt-1 mr-2 text-[18px] " />
            <div className="">
              <p className="font-semibold">Other Europe</p>
              <p className="text-[13px]">English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarGod;
