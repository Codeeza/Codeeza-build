import React from "react";
import Image from "next/image";

const CustomContainer = () => {
  return (
    <section className="bg-white">
      <div className="flex justify-center mb-10 relative overflow-hidden group">
        <Image
          src="/ClassicTShirts.jpg"
          alt="Classic T-Shirts"
          width={900}
          height={900}
          className="object-cover w-full transform transition-transform duration-200 ease-in-out hover:scale-125"
          />
        <button className="absolute bottom-14 left transition-transform duration-300
         ease-linear group-hover:scale-125 -translate-x-3/4 bg-orange-700 text-white px-7 py-3 rounded font-bold">
          Classic T-Shirts
        </button>
        <Image
          src="/CamperCap.jpg"
          alt="Camper Caps"
          width={900}
          height={900}
          className="object-cover w-full transform transition-transform duration-200 ease-in-out hover:scale-110"
          />
        <button className="absolute bottom-14 right-0 transition-transform duration-300
         ease-linear group-hover:scale-125 -translate-x-3/4 bg-orange-700 text-white px-7 py-3 rounded font-bold">
          Camper Cap
        </button>
      </div>
    </section>
  );
};

export default CustomContainer;
