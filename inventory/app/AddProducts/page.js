"use client";

import React, { useState } from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";
import Header from "../../components/Header";

const AddProduct = () => {
  const [itemDetails, setItemDetails] = useState({
    name: "",
    quantity: "",
    availability: "", // Correct field name
  });

  const changeHandler = (e) => {
    setItemDetails({ ...itemDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async() =>{
    console.log(itemDetails);
  }

  return (
    <>
      <Header />
      <div className="container bg-indigo-300 mx-auto bg-contain p-4 self-center place-content-center my-9 shadow-xl flex-auto box-border border-4">
        <h1 className="text-4xl text-center decoration-solid font-bold mb-4 font-mono">ADD PRODUCTS</h1>
        <div className="grid grid-cols-1">
          <div className="flex items-center justify-center">
            <Card className="w-96">
              <form className="flex flex-col gap-4 object-fill">
                <div className="mb-2 block">
                  <Label htmlFor="productName" value="Name" />
                  <TextInput
                    id="productName"
                    name="name" // Added name attribute
                    type="text"
                    required
                    value={itemDetails.name}
                    onChange={changeHandler}
                  />
                </div>
                <div className="mb-2 block">
                  <Label htmlFor="productQuantity" value="Quantity" />
                  <TextInput
                    id="productQuantity"
                    name="quantity" // Added name attribute
                    type="number"
                    required
                    value={itemDetails.quantity}
                    onChange={changeHandler}
                  />
                </div>
                <div className="mb-2 block">
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
                    Availability
                  </label>
                  <div>
                    
                      <input
                        type="radio"
                        name="availability"
                        value="in_stock"
                        className="form-radio"
                        required
                        checked={itemDetails.availability === "in_stock"}
                        onChange={changeHandler}
                      />
                      <span className="ml-2">In Stock</span>
                    
                    <br />
                    
                      <input
                        type="radio"
                        name="availability"
                        value="out_of_stock"
                        className="form-radio"
                        required
                        checked={itemDetails.availability === "out_of_stock"}
                        onChange={changeHandler}
                      />
                      <span className="ml-2">Out of Stock</span>
                    
                  </div>
                </div>
                <div>
                  Total Products in Inventory:
                </div>
                <Button onClick={()=>{Add_Product()}} color="purple" type="submit">Add Products</Button>
              </form>
            </Card>
          </div>
        </div>
        {/* fix add product page details are not showing in console in json format
          continue at approx 6:42 to 46 min
      */}
      </div>
    </>
  );
};

export default AddProduct;

