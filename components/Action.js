import React from "react";

const Action = () => {
  return (
    <div className="flex items-end  h-[31rem]   ">
      <div className="sm:max-w-[40rem] sm:flex justify-between     w-full mx-auto sm:space-x-4">
        <div className="mx-10  ">
          <button className=" bg-gray-900/80 py-[0.45rem]  text-white rounded-[0.3rem]   whitespace-nowrap px-12 w-full sm:w-[16rem]  text-center    ">
            Custom Order
          </button>
        </div>
        <div className="mx-10">
          <button className=" bg-white/60 py-[0.45rem]  text-black/80 rounded-[0.3rem]   whitespace-nowrap px-12 sm:w-[16rem] text-center font-medium mt-4 sm:mt-0 w-full ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Action;
