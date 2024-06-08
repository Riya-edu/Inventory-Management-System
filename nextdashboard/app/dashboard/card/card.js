import React from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = () => {
  return (
    <div className="bg-gray-900 rounded-xl p-4 md:p-6 cursor-pointer text-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out w-full sm:w-1/2 lg:w-1/3 mx-2 my-2">
      <div className="flex items-center mb-4">
        <MdSupervisedUserCircle size={36} className="mr-3 md:mr-4 lg:mr-5" />
        <span className="text-lg md:text-xl font-semibold">Total Users</span>
      </div>
      <div className="text-center">
        <span className="block text-2xl md:text-3xl font-bold mb-2">742</span>
        <span className="text-sm md:text-base font-medium">
          <span className="text-lime-500">12%</span> more than previous week
        </span>
      </div>
    </div>
  );
}

export default Card;
