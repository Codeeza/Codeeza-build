import React from "react";
import Image from "next/image";

const CustomContainer = () => {
  return (
    <section className="bg-white">
      <div className="flex justify-center mb-10 relative">
        <Image
          src="/ClassicTShirts.jpg"
          alt="Classic T-Shirts"
          // layout="responsive"
          width={900}
          height={900}
          className="object-cover w-full"
        />
        <button className="absolute bottom-14 left transform -translate-x-3/4 bg-orange-600 text-white px-7 py-3 rounded">
          Classic T-Shirts
        </button>
        <Image
          src="/CamperCap.jpg"
          alt="Camper Caps"
          // layout="responsive"
          width={900}
          height={900}
          className="object-cover w-full"
        />
        <button className="absolute bottom-14 right-0 transform -translate-x-3/4 bg-orange-600 text-white px-7 py-3 rounded">
          Camper Cap
        </button>
      </div>
    </section>
  );
};

export default CustomContainer;
