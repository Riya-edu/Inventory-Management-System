"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from '../../../components/loading/page';

import Order from '../page';

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const orderDetails = Order.find(order => order.id === parseInt(id));
    setOrder(orderDetails);
    setLoading(false);
  }, [id]);

  const handleCompleteOrder = () => {
    setLoading(true);
    setTimeout(() => {
      setCompleted(true);
      setLoading(false);
      toast.success('Marked as completed!');
    }, 1000);
  };

  if (loading) {
    return <Loading />;
  }

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <p><strong>Order ID:</strong> {order.id}</p>
      <p className="mb-6"><strong>Customer:</strong> {order.customer}</p>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border bg-gray-600 font-extrabold px-4 py-2">Item</th>
            <th className="border bg-gray-600 font-extrabold px-4 py-2">Quantity</th>
            <th className="border bg-gray-600 font-extrabold px-4 py-2">Stock Availability</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map(item => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
              <td className="border px-4 py-2">
                {item.stock >= item.quantity ? 'In Stock' : 'Out of Stock'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!completed && (
        <button
          onClick={handleCompleteOrder}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
        >
          Mark as Completed
        </button>
      )}
      {completed && <p className="text-green-500 mt-4 font-bold">Order Completed!</p>}
    </div>
  );
};

export default OrderDetails;
