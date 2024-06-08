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
    <div className="container mx-auto p-4 md:p-8 rounded-xl flex flex-col md:flex-row bg-slate-900 justify-between items-center">
      <div className="font-bold text-xl md:text-2xl text-white capitalize mb-4 md:mb-0">
        {pathname.split("/").pop() || 'Home'}
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-slate-800 p-2 rounded-xl">
          <MdSearch size={20} className="text-white md:text-xl lg:text-2xl" /> {/* Adjusting icon size for phones, tablets, and laptops */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm md:text-base lg:text-lg" /> {/* Adjusting input text size for phones, tablets, and laptops */}
        </div>
        <div className="flex items-center space-x-4 text-white">
          <MdOutlineChat size={20} className="md:text-xl lg:text-2xl" /> {/* Adjusting icon size for phones, tablets, and laptops */}
          <MdNotifications size={20} className="md:text-xl lg:text-2xl" /> {/* Adjusting icon size for phones, tablets, and laptops */}
          <MdPublic size={20} className="md:text-xl lg:text-2xl" /> {/* Adjusting icon size for phones, tablets, and laptops */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
