"use client";

import React from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";
import Header from "../../components/Header";


const AddProduct = () => {

 
    return (
      
      <>
      <Header />
    <div className="container bg-indigo-300 mx-auto bg-contain p-4 self-center place-content-center my-9 shadow-xl flex-auto box-border border-4">
    <h1 className="text-4xl text-center decoration-solid font-bold mb-4 font-mono">Create Order</h1>
    <div className="grid grid-cols-1">
        <div className="flex items-center justify-center ">
          <Card className="w-96 ">
            <form className="flex flex-col gap-4 object-fill">
              
            <div>
              <div className="mb-2 block">
                  <Label htmlFor="Customer Name" value="Customer Name" />
                </div>
                <TextInput id="Cust_name" type="text" placeholder="Customer Name" required />
            </div>

            <div>
                <div className="mb-2 block">
                  <Label htmlFor="Itemname" value="Item Name" />
                </div>
                <TextInput id="ItemName" type="text" placeholder="Item Name" required />
             </div>

             <div>
             <div className="mb-2 block">
               <Label htmlFor="Quantity" value="Quantity" />
             </div>
             <TextInput id="Quantity" type="Number" required />
           </div>

              <div>
              <div className="mb-2 block">
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
                Availability
              </label>
              <div>
                <label className="inline-flex items-center">
                  <input type="radio" name="availability" value="in_stock" className="form-radio" required />
                  <span className="ml-2">Pending</span>
                </label>
                <br />
                <label className="inline-flex items-center">
                  <input type="radio" name="availability" value="out_of_stock" className="form-radio" required />
                  <span className="ml-2">Completed</span>
                </label>
              </div>
            </div>
            </div>

             
             
              <Button color="purple" type="submit" >Create Order</Button>
            </form>
          </Card>
          </div>
          </div>
    </div>
    
    </>
  );
}

export default AddProduct;
