import React from 'react';


const SearchProduct = () => {

  return (
    <div className="container bg-slate-300 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">SEARCH PRODUCTS</h1>
      <input
        type="text"
        placeholder="Search by item name"
        className="border border-gray-300 p-2 rounded w-full"
      />
    </div>
  );
};

export default SearchProduct;
