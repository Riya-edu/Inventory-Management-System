"use client";

import { useState } from 'react';

const AddOrdersPage = () => {
  const [orderDetails, setOrderDetails] = useState({
    customerName: "",
    productName: "",
    createdat: "", 
    quantity: "",
    status: "",
  });

  const changeHandler = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const Add_Order = async (e) => {
    e.preventDefault(); // Prevent form submission
    console.log(orderDetails);

    try {
      const response = await fetch('http://localhost:4000/addorder', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        alert("Order Added");
      } else {
        alert("Failed to add order");
      }
    } catch (error) {
      console.error("Failed to add order:", error);
      alert("Failed to add order: " + error.message);
    }
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg mt-8 max-w-2xl mx-auto shadow-2xl">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Add New Order</h2>
      <form className="flex flex-wrap justify-between gap-6" onSubmit={Add_Order}>
        <input
          type="text"
          placeholder="Customer Name"
          name="customerName"
          required
          value={orderDetails.customerName}
          onChange={changeHandler}
          className="w-full md:w-[48%] p-4 bg-gray-700 text-white border-2 border-gray-600 rounded-lg mb-6 focus:outline-none focus:ring-4 focus:ring-teal-500 transition duration-200 shadow-md"
        />
        <input
          type="text"
          placeholder="Product Name"
          name="productName"
          required
          value={orderDetails.productName}
          onChange={changeHandler}
          className="w-full md:w-[48%] p-4 bg-gray-700 text-white border-2 border-gray-600 rounded-lg mb-6 focus:outline-none focus:ring-4 focus:ring-teal-500 transition duration-200 shadow-md"
        />
        <input
          type="text"
          placeholder="Created At"
          name="createdat"
          required
          value={orderDetails.createdat}
          onChange={changeHandler}
          className="w-full md:w-[48%] p-4 bg-gray-700 text-white border-2 border-gray-600 rounded-lg mb-6 focus:outline-none focus:ring-4 focus:ring-teal-500 transition duration-200 shadow-md"
        />
        <input
          type="number"
          placeholder="Item Quantity"
          name="quantity"
          required
          value={orderDetails.quantity}
          onChange={changeHandler}
          className="w-full md:w-[48%] p-4 bg-gray-700 text-white border-2 border-gray-600 rounded-lg mb-6 focus:outline-none focus:ring-4 focus:ring-teal-500 transition duration-200 shadow-md"
        />
        <div className="relative w-full md:w-[48%] mb-6">
          <select
            name="status"
            id="status"
            required
            value={orderDetails.status}
            onChange={changeHandler}
            className="appearance-none w-full p-4 bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-500 cursor-pointer transition duration-200 shadow-md"
          >
            <option value="" disabled>Select a Status</option>
            <option value="pending">Pending</option>
            <option value="inprogress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          
        </div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition duration-200 shadow-lg transform hover:scale-105"
        >
          Create Order
        </button>
      </form>
    </div>
  );
};

export default AddOrdersPage;
