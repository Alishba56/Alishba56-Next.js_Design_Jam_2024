
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (

    <footer >
    <div className='w-full h-1 bg-gray-200'></div>
    <div className="  sm:px-4 bg-white sm:py-12 py-0">
      <div className="flex flex-wrap justify-evenly font-bold gap-8">
        <div className="">
          <h2 className="text-xl font-bold mb-10">Funiro.</h2>
          <p className='  text-gray-400'>
            400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA
          </p>
        </div>
          <div className="">
            <h3 className="text-lg  text-gray-400 mb-10">Links</h3>
            <ul className=" space-y-5">
              <li className=" "><Link href="#">Home</Link></li>
              <li className=""><Link href="/shop">Shop</Link></li>
              <li className=""><Link href="/orders"> Dashboard</Link></li>
              <li className=""><Link href="/contact">Contact</Link></li>
              <li className=""><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className="" >
            <h3 className="text-lg text-gray-400 mb-10">Help</h3>
            <ul  className="space-y-5">
              <li className=""><Link href="/payment">Payment Options</Link></li>
              <li className=""><Link href="#">Returns</Link></li>
              <li className=""><Link href="/policy">Privacy Policies</Link></li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg text-gray-400  ">Newsletter</h3>
            <form className="flex mt-10 items-center gap-4">
              <input type="email" placeholder="Enter Your Email Address" className="flex w-40 sm:w-52   mb-0   border-b-[3px] border-gray-500 " />
              <button className=" text-black   font-bold  border-b-[3px] border-gray-500 ">SUBSCRIBE</button>
            </form>
          </div>
      </div>
      <hr className='my-10'/>
      <div className="ml-[8%] mt-8">
        <p>© 2023 Funiro. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
