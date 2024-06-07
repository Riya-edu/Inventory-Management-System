import Image from "next/image";

const Details = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg mt-6 shadow-lg">
      {/* Customer Info */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="relative w-16 h-16 mr-4">
            <img src="/noavatar.png" alt="Customer Image" className="rounded-full object-cover w-full h-full" />
          </div>
          <div className="text-white text-2xl font-semibold">John Doe</div>
        </div>
        <div className="text-gray-400">Created At: 2023-01-01</div>
      </div>

      {/* Order Details */}
      <div className="bg-gray-800 p-6 rounded-lg space-y-6 shadow-inner">
        <div>
          <label className="block text-gray-400 font-medium mb-2">Product Name</label>
          <div className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 hover:bg-gray-600 transition duration-300 ease-in-out">
            Awesome Product
          </div>
        </div>
        <div>
          <label className="block text-gray-400 font-medium mb-2">Item Quantity</label>
          <div className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 hover:bg-gray-600 transition duration-300 ease-in-out">
            2
          </div>
        </div>
        <div>
          <label className="block text-gray-400 font-medium mb-2">Status</label>
          <div className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 hover:bg-gray-600 transition duration-300 ease-in-out">
            In Progress
          </div>
        </div>
        <div>
          <label className="block text-gray-400 font-medium mb-2">Description</label>
          <div className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 hover:bg-gray-600 transition duration-300 ease-in-out">
            This is a detailed description of the product.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
