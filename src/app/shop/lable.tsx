
// import CategoryFilter from '@/components/filter';
import React from 'react'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { PiCirclesFourFill } from "react-icons/pi";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";

const Lable: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around bg-[#F9F1E7] p-4">
      <div className="flex items-center gap-6 mb-4 md:mb-0">
        <button className="text-black flex items-center hover:text-gray-700">
          <HiAdjustmentsHorizontal className="w-6 h-6" />
          <span className="ml-2">Filter </span>
        </button>
        <button className="text-black hover:text-gray-700 text-2xl">
          <PiCirclesFourFill />
        </button>
        <button className="flex items-center text-black hover:text-gray-700 text-2xl">
          <TbLayoutDistributeHorizontal /><span className='text-4xl text-gray-400 mx-3'>|</span>
        </button>
      <div className="text-lg md:text-xl text-black mb-4 md:mb-0">
        Showing 1-16 of 32 results
      </div>
      </div>


      <div className="flex gap-2 md:gap-5">
        <button className="flex items-center gap-2">
          Show <span className=" p-2 text-gray-400 bg-white rounded ">16</span>
        </button>
        <button className="flex items-center gap-2">
          Sort by <span className="p-2 px-3 text-gray-400 bg-white rounded ">Default</span>
        </button>
      </div>
    </div>
  );
}

export default Lable;
