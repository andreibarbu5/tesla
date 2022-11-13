import React from "react";

const ListBtn = ({ title, icon, hidden }) => {
  return (
    <div
      className={`hover:bg-gray-300/50 rounded-[0.5rem] py-1 px-2 text-gray-600 text-[15px] duration-200 ease-out flex items-center justify-between ${hidden} `}
    >
      <p className="font-medium">{title}</p>
      <div className="">{icon}</div>
    </div>
  );
};

export default ListBtn;
