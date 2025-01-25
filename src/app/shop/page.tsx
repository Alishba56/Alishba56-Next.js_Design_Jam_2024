import React from 'react';
import Image from 'next/image';
import img from "../../images/Rectangle 1.png";
import Lable from './lable';
import Products from './products';
import Features from './banner';
import Link from 'next/link';

const ShopHeader: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-72 md:h-96 relative">
        <Image
          src={img}
          alt="background"
          layout="fill"
          objectFit="cover"
          className="absolute  w-full h-full"
        />
      </div>
      <div className="container mx-auto top-32 absolute">
       <h1 className="text-4xl font-bold  text-center mb-4">Shop</h1>
       <p className="text-gray-600 text-center text-2xl"><Link href="/">Home</Link> <span>&gt;</span> Shop</p>
     </div> 
      <div className="">
        <Lable />
        <Products />
        <Features />
      </div>
    </div>
  );
};

export default ShopHeader;
