import React from "react";
import { useState } from 'react'

    const AddProduct = () => {
     
      const[productDetails, setProductDetails] = useState({
        name:"",
        status:"pending",
        category:"",
        quantity:"",
       
        
      })
    
      const changeHandler = (e) =>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
      }
    
      const Add_Product = async() =>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;
    
        let formData = new FormData();
        formData.append('product');
    
        await fetch('http://localhost:4000/upload',{
          method:'POST',
          headers:{
            Accept:'application/json',
          },
          body:formData,
            }).then((resp)=> resp.json()).then((data)=>{responseData=data})
    
            if(responseData.success){
              product.image = responseData.image_url;
              console.log(product);
              await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                  Accept:'application/json',
                  'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
              }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
              })
            }
      }
    
    

  return (
    
    <div className="container bg-slate-300 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ADD PRODUCTS</h1>
      <form className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <input
            type="text"
            name="name"  
            value={productDetails.name} 
            onChange={changeHandler}          
            placeholder="Item Name"
            className="border border-gray-300 p-2 rounded"
            required
          />
          <br/>
          <input
            type="text"
            name="status"
            value={productDetails.status} 
            onChange={changeHandler}
            placeholder="Status"
            className="border border-gray-300 p-2 rounded"
            required
          />
          <br />
          <input
            type="number"
            name="quantity"
            value={productDetails.quantity} onChange={changeHandler} 
           
            placeholder="quantity"
            className="border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
