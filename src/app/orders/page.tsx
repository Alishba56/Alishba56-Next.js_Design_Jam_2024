"use client";

import { client } from "@/sanity/lib/client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

interface Order {
  _id: string;
  _createdAt: string;
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: Order[] = await client.fetch(`*[_type == "order"]`);
        const filteredData = result.filter((item) => item.user === user?.id);
        setData(filteredData);
      } catch () {
        setError("Failed to fetch orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchData();
  }, [user]);

  if (loading) {
    return (
      <div className="text-center my-10 text-lg text-gray-500">
        Loading orders...
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 my-10">{error}</div>;
  }

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">Order History</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((order) => (
          <div
            key={order._id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition duration-150 ease-in-out"
          >
            <div className="mb-4">
              <p className="text-sm text-gray-500">
                <span className="text-black font-bold">Order Id:</span>{" "}
                {order._id}
              </p>
              <p className="text-sm text-gray-500">
                <span className="text-black font-bold">Order Name:</span>{" "}
                {order.email}
              </p>
              <p className="text-sm text-gray-500">
                <span className="text-black font-bold">Order Date:</span>{" "}
                {new Date(order._createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="mb-4">
              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
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
            <div className="mb-4">
              <p className="text-gray-600">
                <span className="text-black font-bold">Items:</span>{" "}
                {order.products?.length || 0}
              </p>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-600">
              View Details
            </button>
          </div>
        ))}
      </div>
      {data.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No orders found.</p>
      )}
    </div>
  );
};

export default Page;
