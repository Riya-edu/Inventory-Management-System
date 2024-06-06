"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="container mx-auto my-4 p-4 ml-8 rounded-xl flex bg-slate-900 justify-between items-center">
      <div className="font-bold text-xl text-white capitalize">
        {pathname.split("/").pop() || 'Home'}
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-slate-800 p-2 rounded-xl">
          <MdSearch size={20} className="text-white" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-4 text-white">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
