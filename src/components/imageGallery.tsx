import React from "react";
import Image from "next/image";
import images from "../images/Share.png";

const ImageGallery = () => {
  const hashtag = "#FuniroFurniture";

  return (
    <div className="bg-white py-20">
      <div className="">
        <div className="text-center mb-8 ">
          <h1 className="text-1xl">Share your setup with</h1>
          <h2 className="text-3xl font-bold">{hashtag}</h2>
        </div>
        <div></div>
        <div className="w-full">
          <Image src={images} alt="picture" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
