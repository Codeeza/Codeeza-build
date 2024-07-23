import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-white m-auto p-5 ">
      <div className=" inset-0 flex items-center justify-center">
        <div className="text-center ">
          <Image
            src="/profile.jpg"
            alt="Alaska Puffer Jacket"
            width={1280}
            height={500}
            className="w-1280 h-300 "
          />
          <h2 className="text-4xl font-bold text-black">
            NEW ALASKA PUFFER JACKET
          </h2>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
