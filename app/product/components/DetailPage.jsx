import Image from "next/image";
import React from "react";

const DetailPage = ({ product }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
      <Image
        src={product.image2}
        alt={product.title}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />
      <div>
        <h1 className="text-5xl font-bold">{product.title}</h1>
        <p className="py-6">{product.rating}</p>
        <p className="text-xl font-bold">{product.price}</p>
      </div>
    </div>
  );
};

export default DetailPage;
