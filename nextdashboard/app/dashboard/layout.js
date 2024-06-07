import React from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar/sidebar'

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="bg-slate-900 p-10">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto p-5">
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default Layout
