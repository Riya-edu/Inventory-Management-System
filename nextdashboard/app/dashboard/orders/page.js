"use client";


import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Pagination from '../pagination/pagination';
import Search from '../search/search';

const Order = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/allorders');
      const data = await response.json();
      setAllOrders(data);
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeOrder = async (id) => {
    try {
      await fetch('http://localhost:4000/removeorder', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      setAllOrders(prevOrders => prevOrders.filter(order => order.id !== id));
      setSearchResults(prevResults => prevResults.filter(order => order.id !== id));
    } catch (error) {
      console.error('Error removing orders:', error);
    }
  };

  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults(allOrders);
    } else {
      const filteredOrders = allOrders.filter(order =>
        Object.values(order).some(value =>
          String(value).toLowerCase().includes(query.toLowerCase())
        )
      );
      setSearchResults(filteredOrders);
    }
  };

  return (
    <div className="bg-gray-900 p-5 rounded-lg mt-4">
      <div className="flex items-center justify-between mb-4">
        <Search onSearch={handleSearch} />
        <Link href="/dashboard/orders/add">
          <button className="px-4 py-2 bg-blue-700 text-white rounded-md">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-gray-300">ID</th>
            <th className="px-4 py-2 text-left text-gray-300">Customer Name</th>
            <th className="px-4 py-2 text-left text-gray-300">Product Name</th>
            <th className="px-4 py-2 text-left text-gray-300">Created At</th>
            <th className="px-4 py-2 text-left text-gray-300">Quantity</th>
            <th className="px-4 py-2 text-left text-gray-300">Status</th>
            <th className="px-4 py-2 text-left text-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((order, index) => (
            <tr key={index} className="border-b border-gray-600">
              <td className="px-4 py-2 text-white">{order.id}</td>
              <td className="px-4 py-2 text-white">{order.customerName}</td>
              <td className="px-4 py-2 text-white">{order.productName}</td>
              <td className="px-4 py-2 text-white">{order.createdat}</td>
              <td className="px-4 py-2 text-white">{order.quantity}</td>
              <td className="px-4 py-2 text-white">{order.status}</td>
              <td className="px-4 py-2 text-white">
                <button
                  onClick={() => removeOrder(order.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Order;
