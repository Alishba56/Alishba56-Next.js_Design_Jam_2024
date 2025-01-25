"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useForm, type SubmitHandler } from "react-hook-form";
import { client } from "@/sanity/lib/client";
import ReturnForm from "./returnfrom";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ReturnFormData {
  selectedProducts: string[];
  returnReasons: { [key: string]: string };
}

const ProductReturnPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ReturnFormData>({
    defaultValues: {
      selectedProducts: [],
      returnReasons: {},
    },
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await client.fetch(`*[_type == 'order']`);
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const selectedProducts = watch("selectedProducts");

  const onSubmit: SubmitHandler<ReturnFormData> = (data) => {
    const returnRequest = data.selectedProducts.map((productId) => ({
      productId,
      productName: products.find((p) => p.id === productId)?.name,
      returnReason: data.returnReasons[productId] || "",
    }));

    console.log("Return Request Submitted:", returnRequest);
    alert("Your return request has been submitted!");
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Return</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-4 border rounded-md shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                id={`product-${product.id}`}
                {...register("selectedProducts")}
                value={product.id}
                className="h-5 w-5"
              />
              <label
                htmlFor={`product-${product.id}`}
                className="flex items-center space-x-4"
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-gray-500">
                    Rs. {product.price.toLocaleString()} x {product.quantity}
                  </p>
                </div>
              </label>
            </div>
            <div className="flex flex-col space-y-2">
              <textarea
                placeholder="Reason for return"
                {...register(`returnReasons.${product.id}`, {
                  required: selectedProducts.includes(product.id)
                    ? "Please provide a reason for return"
                    : false,
                })}
                className="w-64 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {errors.returnReasons?.[product.id] && (
                <p className="text-red-500 text-sm">
                  {errors.returnReasons[product.id]?.message}
                </p>
              )}
            </div>
          </div>
        ))}
        <button
          type="submit"
          disabled={selectedProducts.length === 0}
          className={`w-full py-2 rounded-md text-white font-semibold ${
            selectedProducts.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Submit Return Request
        </button>
      </form>
      <ReturnForm />
    </div>
  );
};

export default ProductReturnPage;
