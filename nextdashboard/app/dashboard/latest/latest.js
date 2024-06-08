import Image from "next/image";

const Latest = () => {
  return (
    <div className="bg-gray-900 p-4 md:p-8 rounded-lg overflow-x-auto">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-8 text-white">Latest Transactions</h2>
      <div className="hidden md:block">
        <table className="w-full">
          <thead>
            <tr>
              <th className="font-semibold text-white pb-4 text-left">Name</th>
              <th className="font-semibold text-white pb-4 text-left">Status</th>
              <th className="font-semibold text-white pb-4 text-left">Item</th>
              <th className="font-semibold text-white pb-4 text-left">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr className="mb-4">
              <td className="flex items-center py-4">
                <Image
                  src="/noavatar.png"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="ml-2 text-white">Customer</span>
              </td>
              <td className="py-4">
                <span className="px-2 py-1 rounded text-white bg-yellow-500">
                  Pending
                </span>
              </td>
              <td className="text-white py-4">Laptop</td>
              <td className="text-white py-4">2</td>
            </tr>
            <tr className="mb-4">
              <td className="flex items-center py-4">
                <Image
                  src="/noavatar.png"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="ml-2 text-white">Customer</span>
              </td>
              <td className="py-4">
                <span className="px-2 py-1 rounded text-white bg-green-500">
                  Done
                </span>
              </td>
              <td className="text-white py-4">Smartphone</td>
              <td className="text-white py-4">5</td>
            </tr>
            <tr className="mb-4">
              <td className="flex items-center py-4">
                <Image
                  src="/noavatar.png"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="ml-2 text-white">Customer</span>
              </td>
              <td className="py-4">
                <span className="px-2 py-1 rounded text-white bg-red-500">
                  Cancelled
                </span>
              </td>
              <td className="text-white py-4">Headphones</td>
              <td className="text-white py-4">1</td>
            </tr>
            <tr className="mb-4">
              <td className="flex items-center py-4">
                <Image
                  src="/noavatar.png"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="ml-2 text-white">Customer</span>
              </td>
              <td className="py-4">
                <span className="px-2 py-1 rounded text-white bg-yellow-500">
                  Pending
                </span>
              </td>
              <td className="text-white py-4">Tablet</td>
              <td className="text-white py-4">3</td>
            </tr>
            <tr className="mb-4">
              <td className="flex items-center py-4">
                <Image
                  src="/noavatar.png"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="ml-2 text-white">Customer</span>
              </td>
              <td className="py-4">
                <span className="px-2 py-1 rounded text-white bg-green-500">
                  Done
                </span>
              </td>
              <td className="text-white py-4">Camera</td>
              <td className="text-white py-4">4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block md:hidden">
        {data.map((transaction, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center mb-2">
              <Image
                src="/noavatar.png"
                alt={transaction.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-2 text-white">{transaction.name}</span>
            </div>
            <div className="text-white">
              <div className="mb-2">
                <span className="font-semibold">Status: </span>
                <span className={`px-2 py-1 rounded text-white ${transaction.status === 'Pending' ? 'bg-yellow-500' : transaction.status === 'Done' ? 'bg-green-500' : 'bg-red-500'}`}>
                  {transaction.status}
                </span>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Item: </span>{transaction.item}
              </div>
              <div>
                <span className="font-semibold">Quantity: </span>{transaction.quantity}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    name: "Customer",
    status: "Pending",
    item: "Laptop",
    quantity: 2,
  },
  {
    name: "Customer",
    status: "Done",
    item: "Smartphone",
    quantity: 5,
  },
  {
    name: "Customer",
    status: "Cancelled",
    item: "Headphones",
    quantity: 1,
  },
  {
    name: "Customer",
    status: "Pending",
    item: "Tablet",
    quantity: 3,
  },
  {
    name: "Customer",
    status: "Done",
    item: "Camera",
    quantity: 4,
  },
];

export default Latest;
