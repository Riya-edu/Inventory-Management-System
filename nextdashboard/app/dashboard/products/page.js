"use client";

import Image from "next/image";
import Link from "next/link";
import Pagination from "../pagination/pagination";
import Search from "../search/search";
import { useEffect, useState } from 'react';

const Product = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts');
      const data = await response.json();
      setAllProducts(data);
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      await fetch('http://localhost:4000/removeproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      setAllProducts(prevProducts => prevProducts.filter(product => product.id !== id));
      setSearchResults(prevResults => prevResults.filter(product => product.id !== id));
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setSearchResults(allProducts);
    } else {
      const filteredProducts = allProducts.filter(product =>
        product.productName.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.status.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredProducts);
    }
  };

  return (
    <div className="bg-gray-900 p-5 rounded-lg mt-4">
      <div className="flex items-center justify-between mb-4">
        <Search placeholder="Search for a Product" onSearch={handleSearch} />
        <Link href="/dashboard/products/add">
          <button className="px-4 py-2 bg-blue-700 text-white rounded-md">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-gray-300">ID</th>
            <th className="px-4 py-2 text-left text-gray-300">Product Name</th>
            <th className="px-4 py-2 text-left text-gray-300">Category</th>
            <th className="px-4 py-2 text-left text-gray-300">Quantity</th>
            <th className="px-4 py-2 text-left text-gray-300">Status</th>
            <th className="px-4 py-2 text-left text-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((product, index) => (
            <tr key={index} className="border-b border-gray-600">
              <td className="px-4 py-2 text-white">{product.id}</td>
              <td className="px-4 py-2 text-white">{product.productName}</td>
              <td className="px-4 py-2 text-white">{product.category}</td>
              <td className="px-4 py-2 text-white">{product.quantity}</td>
              <td className="px-4 py-2 text-white">{product.status}</td>
              <td className="px-4 py-2 text-white">
                <button
                  onClick={() => removeProduct(product.id)}
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

export default Product;
