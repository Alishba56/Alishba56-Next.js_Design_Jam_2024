import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {  CiShare2 } from 'react-icons/ci';
import { MdCompareArrows } from 'react-icons/md';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import CartIcon from '@/components/cardIcon';
import WishIcon from '@/components/wishIcon';

type Slug = {
  current: string;
};

const Products = async () => {
  const query = `*[_type=="product"]{
  _id,
    title,
   "imageUrl" :productImage.asset -> url,
    price,
    tags,
    dicountPercentage,
    description,
    isNew,
    stocks,
    slug,
    productImage
}`;
  const res = await client.fetch(query);
  return (
    <>
      <h1 className="text-center text-3xl md:text-5xl font-bold my-10">Our Products</h1>
    <div className="p-4 px-10 my-16">
      <div className="flex  flex-wrap gap-5 justify-around  ">
      {res.slice(0,20).map((product: {_id:string;  title: string; imageUrl: string; price: number; tags: string[]; dicountPercentage: number; description: string; isNew: boolean; stocks: number; slug: Slug; }) => (
       <div key={product._id} className="relative group">
       <div className="hidden group-hover:block  sm:w-[250px] md:w-[300px]  lg:w-[300px] duration-500 z-20 w-full h-full justify-center absolute    ">
     <Link href={`/singlepage/${product.slug.current}`} className="">

         <div className="w-full h-full top-0  bg-gray-900  opacity-50"></div>
       </Link>
         <div className=" absolute z-30 top-0">
           <button
             id={product._id}
             className="bg-white text-yellow-700 font-bold py-3 text-2xl  mt-28 sm:ml-10 ml-5   px-7"
           >
             <CartIcon id={product._id} />
           </button>

           <div className="flex mt-10 justify-around ">
             <button className=" text-white font-bold gap-2 flex items-center opacity-100">
               <CiShare2 /> Share
             </button>
             <button className=" flex text-white font-bold gap-2 items-center ">
               {" "}
               <MdCompareArrows /> Compare
             </button>
             <button className=" flex  text-white font-bold gap-2 items-center ">
               {" "}
               <WishIcon  id={product.price}/>   Like
             </button>
           </div>
         </div>
       </div>

       <div className="bg-gray-200 w-[250px] sm:w-[250px] md:w-[300px]  lg:w-[300px]  shadow-md overflow-hidden">
         <div className="relative">
           <Image
             width={330}
             height={330}
             src={urlFor(product.imageUrl).url()}
             alt={product.title}
             className="w-full h-72 object-cover"
           />
           {product.dicountPercentage && (
             <div className="absolute top-0 right-8 mt-4 border rounded-full bg-red-500 text-white h-10 w-10 flex justify-center items-center text-sm font-bold">
               -{product.dicountPercentage}%
             </div>
           )}
           {product?.isNew && (
             <div className="absolute top-0 right-8 mt-4  rounded-full bg-green-500 text-white h-10 w-10 text-sm font-bold flex justify-center items-center">
               New
             </div>
           )}
         </div>
         <div className="p-4">
           <h3 className="text-lg font-bold mb-1">
             {product.title}
           </h3>
           <p className="text-sm line-clamp-2 gap-5 text-red-500 font-bold mb-2">
             Stocks({product.stocks})
           </p>
           <div className="flex justify-between">
             <p className="text-gray-600">
               ${product.price.toLocaleString("id-ID")}
             </p>
           </div>
         </div>
       </div>
   </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/shop">
          <button className="bg-white border border-[#B88E2F] text-[#B88E2F] font-bold py-3 px-10 rounded">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Products;
