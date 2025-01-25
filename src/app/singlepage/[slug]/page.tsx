
import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import { PiLineVerticalThin } from "react-icons/pi";
import ProductDetails from './details';
import ProductDescription from './describtion';
import ProductCard from '@/components/products';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
async function page({
  params,
  
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const product = await client.fetch (`*[_type=="product" && slug.current == $slug][0]`, {slug})
  if(product) {
    return (
      <div>
      <div className="flex items-center w-full h-20 sm:pl-20 pl-0   bg-[#F9F1E7] ">
        <Link href="/"> 
  <h1 className='flex gap-2   text-gray-400 items-center'>Home<SlArrowRight className= ' gap-3 text-black'/></h1>
        </Link>
        <Link href="/shop"> 
  <h1 className='flex gap-2  text-gray-400 items-center'>Shop <SlArrowRight className='text-black gap-3'/></h1> </Link>
  <h1 className='flex gap-4 font-bold items-center  '>  <PiLineVerticalThin className='text-black  text-4xl'/>  {product.title}</h1>

  
      </div>
      <ProductDetails props={product}/>
     
      <ProductDescription/>

     
     <ProductCard  /> 

     
      </div>
    )
  }else{
    return <h1>Product not found</h1>
  }
}

export default page
