import React from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar/sidebar'

const layout = ({children}) => {
  return (
    
    <div className="container flex">
    <div className="flex-0 bg-slate-900 pl-10">
    <Sidebar />
    </div>

    <div className="flex-auto">
    <Navbar/>
    {children}
    </div>

    </div>
    
  )
}

export default layout