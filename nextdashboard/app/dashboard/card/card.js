import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 cursor-pointer text-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex items-center mb-4">
        <MdSupervisedUserCircle size={48} className="mr-3" />
        <span className="text-xl font-semibold">Total Users</span>
      </div>
      <div className="text-center">
        <span className="block text-3xl font-bold mb-2">742</span>
        <span className="text-base font-medium">
          <span className="text-lime-500">12%</span> more than previous week
        </span>
      </div>
    </div>
  )
}

export default Card
