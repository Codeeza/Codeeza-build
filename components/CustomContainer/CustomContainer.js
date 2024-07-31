import React from "react";
import Image from "next/image";
import Link from "next/link";

const CustomContainer = () => {
  return (
    <section className="bg-white mb-10 w-full">
      <div className="flex w-full">
        <div className="relative group flex-1 overflow-hidden h-[500px]">
          <Image
            src="/ClassicTShirts.jpg"
            alt="Classic T-Shirts"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-0 ease-in-out group-hover:scale-125"
          />
          <Link href="/classic-t-shirts"> {/* Link to the product page */}
            <a className="absolute bottom-14 right-20 transition-transform duration-300 ease-in-out group-hover:translate-x-10 group-hover:scale-125 bg-red-700 text-white px-7 py-3 rounded font-bold">
              Classic T-Shirts
            </a>
          </Link>
        </div>
        <div className="relative group flex-1 overflow-hidden h-[500px]">
          <Image
            src="/CamperCap.jpg"
            alt="Camper Cap"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-0 ease-in-out group-hover:scale-125"
          />
          <Link href="/camper-cap"> {/* Link to the product page */}
            <a className="absolute bottom-14 right-20 transition-transform duration-300 ease-in-out group-hover:translate-x-10 group-hover:scale-125 bg-red-700 text-white px-7 py-3 rounded font-bold">
              Camper Cap
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomContainer;
