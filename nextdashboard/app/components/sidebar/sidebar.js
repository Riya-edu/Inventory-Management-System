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
    <div className='container sticky pt-10 font-semibold text-lg '>

    <div className='h-10 w-20 rounded-xl object-cover mb-0'>
    <img src="/noavatar.png" alt=""/>
    </div>
    <div className='ml-0 pl-0 flex-col flex content-center g-20 m-20 font-bold text-xl'>
      <span >Albert Einstien</span>
      <span>Admin</span>
   </div>
    <ul>
        {menuItems.map((icon) => (
          <li key={icon.title}>
            <span>{icon.title}</span>
              {icon.list.map((item) => (
                <Menulink item={item} key={item.title}/>
              ))}          
          </li>
        ))}
      </ul>
    
    </div>
  )
}

export default Sidebar