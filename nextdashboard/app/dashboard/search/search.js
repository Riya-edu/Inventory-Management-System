"use client";

import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search here"
      value={query}
      onChange={handleChange}
      className="px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-700"
    />
  );
};

export default Search;
