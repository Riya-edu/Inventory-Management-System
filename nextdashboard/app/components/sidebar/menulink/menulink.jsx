"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menulink = ({ item }) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  return (
    <div className={`p-2 ${isActive ? 'bg-gray-900' : ''}`}>
      <Link href={item.path}className={`flex items-center space-x-2 px-2 py-1 rounded ${isActive ? 'text-blue-500' : 'text-gray-300'} hover:bg-slate-600`}>
          <div>{item.icon}</div>
          <span>{item.title}</span>
        
      </Link>
    </div>
  );
};

export default Menulink;
