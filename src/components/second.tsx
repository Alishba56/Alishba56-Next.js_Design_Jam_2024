
import React from "react";
import Image from "next/image";
import background from "../images/background .png";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-10">
      <div className="w-full h-72  lg:h-[70vh] overflow-hidden">
        <Image
          src={background}
          alt="Room and Furniture"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="absolute bottom-5 lg:bottom-24 flex h-[300px] items-center justify-center lg:justify-start sm:right-24 p-8  bg-[#FFF3E3]  rounded-lg shadow-md">
        <div className="text-center lg:text-start ">
          <p className="text-sm font-semibold text-black uppercase">New Arrival</p>
          <h1 className="mt-4 text-2xl md:text-4xl font-bold text-yellow-700 leading-tight">
            Discover Our New Collection
          </h1>
          <p className="mt-4 text-gray-600 w-full sm:w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <Link href='/shop'>
          <button className="mt-6 px-6 md:px-10 py-3 md:py-4 text-white bg-yellow-700 hover:bg-yellow-600 font-medium rounded">
            Buy Now
          </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

