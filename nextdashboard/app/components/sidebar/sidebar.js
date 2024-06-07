import React from 'react'
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from "react-icons/md";
import Menulink from './menulink/menulink';

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Orders",
        path: "/dashboard/orders",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className='w-64 h-full p-6 bg-slate-900 text-white sticky top-0'>
      <div className='flex flex-col items-center mb-6'>
        <img src="/noavatar.png" alt="Avatar" className='h-20 w-20 rounded-full object-cover mb-2' />
        <div className='text-center'>
          <span className='block font-bold text-xl'>Albert Einstein</span>
          <span className='text-gray-400'>Admin</span>
        </div>
      </div>
      <ul className='space-y-6'>
        {menuItems.map((menu) => (
          <li key={menu.title}>
            <span className='block text-gray-500 uppercase mb-2'>{menu.title}</span>
            <ul className='space-y-2'>
              {menu.list.map((item) => (
                <Menulink item={item} key={item.title} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
