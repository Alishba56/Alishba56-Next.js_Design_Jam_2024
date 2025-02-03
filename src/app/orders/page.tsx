"use client";

import { client } from "@/sanity/lib/client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

interface Order {
  _id: string;
  _createdAt: string;
  firstName: string;
  email: string;
  status: string;
  user: string;
  products: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
}

const Page = () => {
  const { user } = useUser();
  const [data, setData] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const Details = (order: Order) => {
    setSelectedOrder(order);
  };

  const closeProductDetails = () => {
    setSelectedOrder(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: Order[] = await client.fetch(`*[_type == "order"]`);
        const filteredData = result.filter((item) => item.user === user?.id);
        setData(filteredData);
      } catch {
        setError("Failed to fetch orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchData();
  }, [user]);

  const deleteOrder = async (orderId: string) => {
    try {
      await client.delete(orderId);
      setData((prevData) => prevData.filter((order) => order._id !== orderId));
    } catch {
      setError("Failed to delete order. Please try again later.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-lg text-gray-700">Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Order History
      </h1>
      {data.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-gray-500 text-lg">No orders found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-sm text-gray-500">
                    <span className="text-black font-bold">Order ID:</span>{" "}
                    {order._id}
                  </p>
                  <button
                    onClick={() => deleteOrder(order._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  <span className="text-black font-bold">Order Date:</span>{" "}
                  {new Date(order._createdAt).toLocaleDateString()}
                </p>

                <div className="mb-4 justify-between flex">
                  <p className="text-gray-600">
                    <span className="text-black font-bold">Items:</span>{" "}
                    {order.products?.length || 0}
                  </p>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.status || "Processing"}
                  </span>
                </div>
                <button
                  onClick={() => Details(order)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Show Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedOrder && (
        <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800"> Details</h2>
            <button
              onClick={closeProductDetails}
              className="text-red-500 hover:text-red-700"
            >
              Close
            </button>
          </div>
          <p className="text-gray-600 mb-2">
            <span className="text-black font-bold">Customer ID:</span>{" "}
            {selectedOrder.user}
          </p>
        </div>
      )}
    </div>
  );
};

export default Page;
