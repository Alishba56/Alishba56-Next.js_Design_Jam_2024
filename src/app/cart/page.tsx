"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface ProductType {
  _id: string;
  title: string;
  price: number;
  productImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

const Page = () => {
  const [cart, setCart] = useState<string[]>([]); // Cart item IDs
  const [products, setProducts] = useState<ProductType[]>([]); // Cart products
  const [count, setCount] = useState<{ [key: string]: number }>({}); // Quantity for each product

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem("cartItem", JSON.stringify(cart));
    }

    const getProduct = async () => {
      const product: ProductType[] = await client.fetch(
        `*[_type == 'product']`
      );
      const filteredProducts = product.filter((item) =>
        cart.includes(item._id)
      );
      setProducts(filteredProducts);

      const initialCount = filteredProducts.reduce(
        (acc, item) => {
          acc[item._id] = 1;
          return acc;
        },
        {} as { [key: string]: number }
      );
      setCount(initialCount);
    };

    getProduct();
  }, [cart]);

  const handleQuantityChange = (id: string, type: "increase" | "decrease") => {
    setCount((prevCount) => {
      const newCount = { ...prevCount };
      if (newCount[id]) {
        newCount[id] =
          type === "increase" ? newCount[id] + 1 : newCount[id] - 1;
        if (newCount[id] < 1) newCount[id] = 1; // Prevent negative quantity
      }
      return newCount;
    });
  };

  const delCart = (id: string) => {
    const updatedCart = cart.filter((item) => item !== id);
    setCart(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };

  const totalPrice = products.reduce((sum, item) => {
    const itemCount = count[item._id] || 1;
    return sum + item.price * itemCount;
  }, 0);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-8">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-2/3">
          <div className="flex h-14 bg-[#F9F1E7] items-center justify-between mb-4 px-4 md:px-8">
            <p className="font-semibold">Product</p>
            <p className="font-semibold">Price</p>
            <p className="font-semibold">Quantity</p>
            <p className="font-semibold">Subtotal</p>
            <p className="font-semibold"></p>
          </div>

          {products.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-center mb-4 bg-white rounded p-4 md:p-6 gap-4"
            >
              <div className="flex-shrink-0">
                <Image
                  src={urlFor(item.productImage).url()}
                  width={100}
                  height={100}
                  alt={item.title}
                  className="h-20 w-32 object-contain"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 md:gap-8">
                <p className="text-sm md:text-base">{item.title}</p>
                <p className="text-sm md:text-base mb-2 md:mb-0">$ {item.price.toFixed(2)}</p>

                <div className="flex items-center px-4 py-2 gap-5 border">
                  <button
                    onClick={() => handleQuantityChange(item._id, "decrease")}
                    className="text-xl"
                  >
                    -
                  </button>
                  <p className="mb-2 md:mb-0">{count[item._id] || 1}</p>
                  <button
                    onClick={() => handleQuantityChange(item._id, "increase")}
                    className="text-xl"
                  >
                    +
                  </button>
                </div>

                <p className="text-sm md:text-base mb-2 md:mb-0">
                  $ {(item.price * (count[item._id] || 1)).toFixed(2)}
                </p>

                <button
                  onClick={() => delCart(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F9F1E7] w-full md:w-80 p-6 rounded flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-center mb-4">Cart Totals</h2>
          <div>
            <div className="flex justify-between mb-6 px-8">
              <p className="text-sm md:text-base">Subtotal</p>
              <p className="text-sm md:text-base">$ {totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-4 font-bold px-8">
              <p className="text-sm md:text-base">Total</p>
              <p className="text-sm md:text-base">$ {totalPrice.toFixed(2)}</p>
            </div>
          </div>
          <Link href="/checkout" className="flex justify-center">
            <button className="w-40 py-2 border border-black text-black font-bold rounded-lg mt-4 hover:bg-black hover:text-white transition-colors">
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
