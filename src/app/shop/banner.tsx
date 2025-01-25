import React from 'react';
import { HiOutlineTrophy } from "react-icons/hi2";
import { FiAlertOctagon } from "react-icons/fi";
import { FaShippingFast } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";

const Features = () => {
  return (
    <div className="flex flex-wrap md:flex-row justify-between items-center bg-[#F9F1E7] p-6">
      <div className=" items-center ">
        <div className=" flex gap-3">
          <  HiOutlineTrophy  className=" text-6xl mb-2"/>
          <h3 className="font-bold text-lg">High Quality <br /> <span className='text-gray-400'>crafted from top materials</span></h3>
        </div>
      </div>
      <div className=" items-center  p-4">
        <div className=" flex gap-3">
          < FiAlertOctagon   className=" text-6xl mb-2"/>
          <h3 className="font-bold text-lg">Warranty Protection <br /> <span className='text-gray-400'>Over 2 years</span></h3>
        </div>    
      </div>
      <div className=" items-center  p-4">
        <div className=" flex gap-3">
          <   FaShippingFast   className=" text-6xl mb-2"/>
          <h3 className="font-bold text-lg">Free Shipping <br /> <span className='text-gray-400'>Order over 150 $</span></h3>
        </div>
      </div>
      <div className=" items-center  p-4">
        <div className=" flex gap-3">
          <  FaHeadset  className=" text-6xl mb-2"/>
          <h3 className="font-bold text-lg">24 / 7 Support <br /> <span className='text-gray-400'>Dedicated support</span></h3>
  </div>
      </div>
    </div>
  );
};

export default Features;
