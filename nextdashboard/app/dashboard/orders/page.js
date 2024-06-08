"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Pagination from '../pagination/pagination';
import Search from '../search/search';
import Loading from '../../components/loading/page';
import { useRouter } from 'next/navigation';


const Order = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState(''); 
  const [filterByNameOrder, setFilterByNameOrder] = useState('asc'); 
  const [filterByQuantityOrder, setFilterByQuantityOrder] = useState('asc'); 
  const router = useRouter();
 
  const fetchInfo = async () => {
    try {

      // Displaying Orders
      const response = await fetch('http://localhost:4000/allorders');
      const data = await response.json();
      setAllOrders(data);
      setSearchResults(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Deleting Orders

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

  const handleFilter = (status) => {
    setFilterStatus(status);
    if (status === '') {
      setSearchResults(allOrders);
    } else {
      const filteredOrders = allOrders.filter(order => order.status.toLowerCase() === status.toLowerCase());
      setSearchResults(filteredOrders);
    }
  };

  // Function to sort orders by customer name or quantity
  const handleSort = (key, order) => {
    const sortedOrders = [...searchResults].sort((a, b) => {
      if (key === 'customerName') {
        if (order === 'asc') {
          return a.customerName.localeCompare(b.customerName);
        } else {
          return b.customerName.localeCompare(a.customerName);
        }
      } else if (key === 'quantity') {
        return order === 'asc' ? a.quantity - b.quantity : b.quantity - a.quantity;
      }
    });
    setSearchResults(sortedOrders);
  };

  // Function to filter orders by customer name alphabetical order
  const handleFilterByName = () => {
    setFilterByNameOrder(order => order === 'asc' ? 'desc' : 'asc');
    handleSort('customerName', filterByNameOrder);
  };

  // Function to filter orders by quantity in ascending or descending order
  const handleFilterByQuantity = () => {
    setFilterByQuantityOrder(order => order === 'asc' ? 'desc' : 'asc');
    handleSort('quantity', filterByQuantityOrder);
  };

  if (loading) {
    return <Loading/>
  }

  return (
    <div className="bg-gray-900 p-4 sm:p-5 rounded-lg mt-4">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
        <Search onSearch={handleSearch} />
        <div>
          <button onClick={() => handleFilter('')} className={`mr-2 px-4 py-2 rounded-md ${filterStatus === '' ? 'bg-blue-700 text-white' : 'bg-gray-700 text-gray-200'}`}>
            All
          </button>
          <button onClick={() => handleFilter('pending')} className={`mr-2 px-4 py-2 rounded-md ${filterStatus === 'pending' ? 'bg-blue-700 text-white' : 'bg-gray-700 text-gray-200'}`}>
            Pending
          </button>
          <button onClick={() => handleFilter('complete')} className={`px-4 py-2 rounded-md ${filterStatus === 'complete' ? 'bg-blue-700 text-white' : 'bg-gray-700 text-gray-200'}`}>
            Complete
          </button>
        </div>
        <Link href="/dashboard/orders/add">
          <button className="px-4 py-2 bg-blue-700 text-white rounded-md">
            Add New
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr>
              <th onClick={() => handleSort('id')} className="px-2 py-2 text-left text-gray-300 cursor-pointer">ID <button>#</button> </th>
              <th onClick={handleFilterByName} className="px-2 py-2 text-left text-gray-300 cursor-pointer">Customer Name <button>#</button></th>
              <th className="px-2 py-2 text-left text-gray-300">Product Name</th>
              <th className="px-2 py-2 text-left text-gray-300">Created At</th>
              <th onClick={handleFilterByQuantity} className="px-2 py-2 text-left text-gray-300 cursor-pointer">Quantity <button>#</button></th>
              <th className="px-2 py-2 text-left text-gray-300">Status</th>
              <th className="px-2 py-2 text-left text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((order, index) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="px-2 py-2 text-white">{order.id}</td>
                <td className="px-2 py-2 text-white">{order.customerName}</td>
                <td className="px-2 py-2 text-white">{order.productName}</td>
                <td className="px-2 py-2 text-white">{order.createdat}</td>
                <td className="px-2 py-2 text-white">{order.quantity}</td>
                <td className="px-2 py-2 text-white">{order.status
                }</td>
                <td className="px-2 py-2 text-white space-x-2">
                  <button
                    onClick={() => {
                      setLoading(true)
                      setTimeout(() => {
                        router.push(`/orders/${order.id}`)
                      }, 500)
                    }}
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium
transition-all rounded-lg text-sm px-3 py-2 mb-2 sm:mb-0 sm:mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
                  >
                    View Details
                  </button>
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
      </div>
      <Pagination />
    </div>
  );
};

export default Order;
