"use client";

import { useState } from 'react';

const AddProductPage = () => {
  const [productDetails, setProductDetails] = useState({
    productName: "",
    category: "",
    quantity: "",
    status: "",
  });

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async (e) => {
    e.preventDefault();  
    console.log(productDetails);

    try {
      const response = await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productDetails),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        alert("Product Added");
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Failed to add product: " + error.message);
    }
  };

  return (
    <div className="bg-gray-900 p-4 sm:p-8 rounded-lg mt-8 max-w-2xl mx-auto shadow-2xl">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Add New Product</h2>
      <form className="flex flex-wrap gap-6" onSubmit={Add_Product}>
        <input
          type="text"
          placeholder="Product Name"
          name="productName"
          required
          value={productDetails.productName}
          onChange={changeHandler}
          className="w-full p-4 bg-gray-700 text-white border-2 border-gray-600 rounded-lg mb-6 focus:outline-none focus:ring-4 focus:ring-teal-500 transition duration-200 shadow-md"
        />
        <div className="w-full md:w-1/2 relative">
          <select
            name="category"
            id="category"
            required
            value={productDetails.category}
            onChange={changeHandler}
            className="appearance-none w-full p-4 bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-500 cursor-pointer transition duration-200 shadow-md"
          >
            <option value="" disabled>Choose a Category</option>
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="lifestyle">Lifestyle</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <input
          type="number"
          placeholder="Stock"
          name="quantity"
          required
          value={productDetails.quantity}
          onChange={changeHandler}
          className="w-full p-4 bg-gray-700 text-white border-2 border-gray-600 rounded-lg mb-6 focus:outline-none focus:ring-4 focus:ring-teal-500 transition duration-200 shadow-md"
        />
        <div className="w-full md:w-1/2 relative">
          <select
            name="status"
            id="status"
            required
            value={productDetails.status}
            onChange={changeHandler}
            className="appearance-none w-full p-4 bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-500 cursor-pointer transition duration-200 shadow-md"
          >
          <option value="" disabled>Choose a Status</option>
          <option value="available">Available</option>
          <option value="out of stock">Out of Stock</option>
          <option value="discontinued">Discontinued</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition duration-200 shadow-lg transform hover:scale-105"
        >
          Add to Inventory
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
