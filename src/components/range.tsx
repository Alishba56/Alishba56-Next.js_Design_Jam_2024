import Image from "next/image";
import React from "react";
import Img1 from "../images/Mask Group (1).png";
import Img2 from "../images/Mask Group.png";
import Img3 from "../images/Image-living room.png";

const BrowseRange = () => {
  return (
    <section className="py-12  bg-white">
      <div className="  text-center ">
        <h2 className="text-2xl mt-10 font-bold text-gray-800 sm:text-3xl">
          Browse The Range
        </h2>
        <p className="mt-2  text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-20 flex flex-wrap gap-6 justify-center">
          <div className=" ">
            <Image src={Img1} alt="Dining" className="h-[90%] " />

            <div className=" text-center">
              <h3 className="text-lg font-semibold mt-5 text-gray-800 ">
                Dining
              </h3>
            </div>
          </div>

          <div className=" ">
            <Image src={Img2} alt="Dining" className="h-[90%] " />

            <div className=" text-center">
              <h3 className="text-lg font-semibold mt-5 text-gray-800">
                Living
              </h3>
            </div>
          </div>

          <div className=" ">
            <Image src={Img3} alt="Dining" className="h-[90%] " />

            <div className=" text-center">
              <h3 className="text-lg font-semibold mt-5 text-gray-800">
                Bedroom
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;
