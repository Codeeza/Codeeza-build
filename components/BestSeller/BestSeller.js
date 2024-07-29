import React from "react";
import AmericanoCap from "@/pages/AmericanoCap";
import AspenBeanie from "@/pages/AspenBeanie";
import ClassicTShirt from "@/pages/ClassicTShirt";
import PromoTShirt from "@/pages/PromoTShirt";

const BestSeller = () => {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-2">
        <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-3xl  text-center text-red-600 font-semibold">
          BEST SELLERS
        </h2>
      </div>
      <div className="lg:ml-11 lg:mr-12 p-12 mb-10 lg:mt-0 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-2 grid-cols-2 sm:gap-4 gap-2">
        <>
          <AmericanoCap />
          <AspenBeanie />
          <ClassicTShirt />
          <PromoTShirt />
        </>
      </div>
    </section>
  );
};

export default BestSeller;