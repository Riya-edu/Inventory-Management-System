import Image from "next/image";

const Latest = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-8 text-white">Latest Transactions</h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="font-semibold text-white pb-4">Name</td>
            <td className="font-semibold text-white pb-4">Status</td>
            <td className="font-semibold text-white pb-4">Item</td>
            <td className="font-semibold text-white pb-4">Quantity</td>
          </tr>
        </thead>
        <tbody>
          <tr className="mb-4">
            <td className="flex items-center py-4">
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-2 text-white">John Doe</span>
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
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-2 text-white">Jane Smith</span>
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
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-2 text-white">Robert Brown</span>
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
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-2 text-white">Alice Johnson</span>
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
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-2 text-white">Michael Davis</span>
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
  );
};

export default Latest;
