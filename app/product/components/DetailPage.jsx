"use client";
import { useState, useEffect } from "react";
import ProductModal from "./ProductModal";
import Image from "next/image";
import Link from "next/link";
import { countries } from "@/lib/CountrySelect";

const ProductPage = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (product.colorVariants && product.colorVariants.length > 0) {
      setSelectedVariant(product.colorVariants[0]);
    }
  }, [product]);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  // useEffect(() => {
  //   if (product.imageSelect && product.colorVariants.length > 0) {
  //     setSelectedImage(product.colorVariants[0]);
  //   }
  // }, [product]);

  // const handleImageChange = (image) => {
  //   setSelectedImage(image);
  // }

  return (
    <div className="p-6">
      <div className="ml-2 sm:ml-28 ">
        {" "}
        <h1 className="text-3xl text-red-500 font-bold">{product.name}</h1>
        <div className="flex items-center  space-x-2 text-sm text-gray-600">
          <span>Home</span> / <span>Headwear</span> /{" "}
          <span>{product.name}</span>
        </div>
      </div>
      <div className=" mt-8 flex-wrap sm:flex justify-center">
        <div className="w-full sm:w-[500px]">
          {selectedVariant && (
            <Image
              src={selectedVariant.image}
              alt={`${product.name} in ${selectedVariant.name}`}
              width={500}
              height={500}
              className="w-full"
            />
          )}

          {/* <div className="mt-4">
            <button className="w-full p-2 bg-blue-500 text-white rounded">
              View full image gallery
            </button>
          </div> */}
        </div>

        <div className="w-1/2 px-6 text-gray-700">
          {selectedVariant && (
            <>
              <p>
                <Link
                  href="/login"
                  className="font-bold text-red-500 hover:text-gray-700  "
                >
                  Login or Register
                </Link>{" "}
                to view product prices
              </p>
              <p className="mt-2">
                <strong>Color:</strong> {selectedVariant.name}
              </p>
              <div className="flex mt-4 mb-4 ml-5 space-x-2 flex-wrap">
                {product.colorVariants &&
                  product.colorVariants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => handleVariantChange(variant)}
                      className={`w-8 h-8 border-2 p-2 m-1 ${
                        selectedVariant && selectedVariant.name === variant.name
                          ? "ring-2 ring-red-500"
                          : ""
                      }`}
                      style={{ backgroundColor: variant.hex }}
                      aria-label={`Select ${variant.name}`}
                      title={`${variant.name}`}
                    ></button>
                  ))}
              </div>
              <p className="text-sm mt-5">
                {/* CODE: {selectedVariant.code} */}
                <strong>SIZE</strong>: {selectedVariant.size}
              </p>
              {/* <p className="mt-4 text-lg">Price: {selectedVariant.price}</p> */}
              <p className="mt-2 text-sm mb-4">
                {selectedVariant.stock} in stock
              </p>
            </>
          )}
          {/* <p className="mt-4 mb-4 ">{product.description}</p> */}
          <span className="">
            <input
              type="number"
              className="bg-white mb-2 w-[50px] border-2 border-gray-300"
            />
          </span>
          <div>
            <Link
              href="/login"
              className="w-[200px] p-2 hover:bg-red-700 bg-red-500 text-white rounded mb-2"
            >
              login
            </Link>
          </div>
        </div>
      </div>
      {showModal && (
        <ProductModal product={product} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default ProductPage;
