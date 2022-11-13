import React from "react";
import Action from "../components/Action";
import Navbar from "../components/Navbar";
import SidebarGod from "../components/SidebarGod";
import Title from "../components/Title";

const Hero = ({ openSidebar, isOpen, title, img, isNav }) => {
  return (
    <div className={`${img} h-screen bg-no-repeat bg-cover bg-center  `}>
      {/* First Hero */}
      {isNav && <Navbar openSidebar={openSidebar} />}

      {/* Sidebar */}
      <SidebarGod openSidebar={openSidebar} isOpen={isOpen} />
      {/* Nav */}

      {/* Title */}
      <Title title={title} />
      {/* Buttons */}
      <Action />
    </div>
  );
};

export default Hero;
