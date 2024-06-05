import React from 'react'
import Header from '../../components/Header';


const Display = () => {
      // Sample stock data of Inventory
  const stockData = [
    { id: 1, name: 'Smart Phones', status: 'In Stock', quantity: 150},
    { id: 2, name: 'Tablets', status: 'Out of Stock', quantity: 250},
    { id: 3, name: 'Laptops', status: 'Out of Stock',  quantity: 3400},
  ];
 

  return (
    
    // Display Current Stock in Inventory
     <>

     <Header />

     <div className="container bg-indigo-300 mx-auto bg-contain p-4 self-center place-content-center my-9 shadow-xl flex-auto box-border border-4">

 <h1 className="text-2xl font-bold mb-4">DISPLAY PRODUCTS</h1>
        
 <div className="overflow-x-auto">
   <table className="min-w-full bg-white border border-gray-200">
     <thead>
       <tr>
         <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
           ID
         </th>
         <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
           Item Name
         </th>
         
         <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
           Quantity
         </th>
         <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
           Availability
         </th>
         <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
         
         </th>
         
       </tr>
     </thead>
     <tbody>
       {stockData.map(stock => (
         <tr key={stock.id} className="bg-white even:bg-gray-50 hover:bg-gray-100">
           <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
             {stock.id}
           </td>
           <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
             {stock.name}
           </td>
           <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
             {stock.quantity}
           </td>
           <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
             {stock.status}
           </td>
            <td>
            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            Delete
          </a>
           </td>
          
         </tr>
       ))}
     </tbody>
   </table>
 </div>
</div>
</>
  )
}

export default Display