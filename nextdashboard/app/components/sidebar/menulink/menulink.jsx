"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menulink = ({ item }) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  return (
    <Link href={item.path}>
      <div className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-700 hover:text-white'}`}>
        <div className={`text-xl ${isActive ? 'text-white' : 'text-gray-400'}`}>{item.icon}</div>
        <span>{item.title}</span>
      </div>
    </Link>
  );
};

export default Menulink;
