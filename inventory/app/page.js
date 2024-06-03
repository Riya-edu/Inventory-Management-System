import Image from "next/image";
import Header from "../components/Header";
import React from "react";
import Display from "../components/Display";
import AddProduct from "../components/AddProduct";
import SearchProduct from "../components/SearchProduct";


export default function Home() {
  const addProduct = (product) => {
    const newStock = {
      id: stockData.length + 1,
      name: product.name,
      status: product.status,
      item: parseInt(product.item, 10),
    };
    setStockData([...stockData, newStock]);
  };
  return (
    <>
    
      <Header />

      <AddProduct addProduct={addProduct} />
      <SearchProduct />
      
      <Display/>
        
   

    </>
  );
}
