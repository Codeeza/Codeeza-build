"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import ProductModal from "./ProductModal";

const DetailPage = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6">
      <div className="flex mt-8">
        <div className="w-1/2">
          <img src={product.image} alt={product.name} className="w-full" />
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setSelectedColor(product.colors[0].hex)}
              className="p-2 rounded-full bg-gray-300"
            >
              &#8592;
            </button>
            <Image
              src="/ice-beanie-burnt-orange-.jpg"
              alt={product.name}
              width={40}
              height={40}
              className="rounded-md"
            />
            <button
              onClick={() => setSelectedColor(product.colors[1].hex)}
              className="p-2 rounded-full bg-gray-300"
            >
              &#8594;
            </button>
          </div>
          <div className="flex mt-4 space-x-2"></div>
          <div className="mt-4">
            <button
              onClick={() => setShowModal(true)}
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              View full image gallery
            </button>
          </div>
        </div>
        <div className="w-1/2 px-6">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-sm text-gray-500">CODE: {product.code}</p>
          <p className="mt-4 text-lg">{product.description}</p>
          <ul className="mt-4 list-disc list-inside">
            <li>145g/m²</li>
            <li>{product.materials}</li>

            <li>Ribbed crew neck</li>
            <li>{product.fit}</li>
            <li>{product.gender}</li>
          </ul>
          <p className="mt-4">
            <strong>Material:</strong> {product.materials}
          </p>
          <p className="mt-4 text-sm">
            <strong>Availability:</strong> {product.stock} in stock
          </p>
          <div className="mt-4">
            <button className="w-full p-2 bg-blue-500 text-white rounded mb-2">
              Check Stock
            </button>
            <button className="w-full p-2 bg-white text-blue-500 border border-blue-500 rounded">
              Branding Guideline
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <ProductModal product={product} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default DetailPage;
