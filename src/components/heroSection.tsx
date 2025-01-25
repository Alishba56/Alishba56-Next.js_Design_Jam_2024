import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import img from "../images/hero1.png";
import { urlFor } from "@/sanity/lib/image";

// TypeScript Type for Product
interface Product {
  productImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

const Herosection = async () => {
  // Fetch products from Sanity
  const query = `*[_type=="product"]{productImage}`;
  const res: Product[] = await client.fetch(query);

  return (
    <section className="bg-[#FCF8F3] my-10 pt-0 h-full">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 pt-20 px-8 md:px-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="text-lg md:text-2xl mb-9">
              Our designer already made a lot of beautiful prototypes of rooms
              that inspire you
            </p>
            <Link
              href="/shop"
              className="bg-[#B88E2F] hover:bg-[#B88E2F] text-white font-bold py-3 px-6 md:py-5 md:px-7 rounded"
            >
              Explore More
            </Link>
          </div>
          <div className="w-full md:w-1/2 relative pt-10 flex flex-wrap gap-8 overflow-x-scroll hide-scrollbar">
            <div className="relative w-[1300px] flex gap-8">
              <div className="relative w-[900px]">
                <Image
                  src={img}
                  alt="Hero Image"
                  className="shadow-md w-full h-auto"
                />
                <h1 className="bg-white opacity-70 absolute bottom-4 left-4 px-4 py-8 text-black text-xl">
                  01 <span className="text-gray-500">____</span> Bed Room <br />
                  <span className="font-bold text-2xl">Inner peace</span>
                </h1>
              </div>
              <FaArrowRight className="bg-[#B88E2F] text-5xl absolute bottom-4 left-[220px] px-2 py-2 text-white" />
              {res &&
                res.slice(0, 4).map((item, index) => (
                  <div key={index} className="w-[700px]">
                    {item.productImage ? (
                      <Image
                        src={
                          urlFor(item.productImage).url() ||
                          "/fallback-image.png"
                        }
                        width={1000}
                        height={500}
                        alt="Product Image"
                        className="shadow-md w-full h-full mt-4 md:mt-0"
                      />
                    ) : (
                      <div className="bg-gray-200 w-full h-[500px] flex items-center justify-center">
                        <p className="text-gray-500">No Image Available</p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
