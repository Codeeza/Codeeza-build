"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ProductModal from "./ProductModal";
import Link from "next/link";

const DetailPage = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [mainImage, setMainImage] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
  };

  useEffect(() => {
    if (product.variants && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
      setMainImage(product.variants[0].image);
    }
  }, [product]);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
    setMainImage(variant.image);
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-red-500">
              {product.name}
            </h1>
            <div className="flex items-center space-x-2 text-sm text-gray-600 flex-wrap">
              <span>Home</span> / <span>headwear</span> /{" "}
              <span>{product.name}</span>
            </div>
          </div>
          {mainImage && (
            <div className="mb-4">
              <Image
                src={mainImage}
                alt={`${product.name} - Main Image`}
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
          )}
          <div className="flex flex-wrap gap-2 justify-center">
            {product.variants &&
              product.variants.map((variant) => (
                <button
                  key={variant.name}
                  onClick={() => handleVariantChange(variant)}
                  className="w12 h-12 md:w-16 md:h-16"
                  aria-label={`Select ${variant.name}`}
                >
                  {variant.type === "image" ? (
                    <Image
                      src={variant.image}
                      alt={variant.name}
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover opacity-50 hover:opacity-100"
                      onClick={() => handleImageClick(variant.image)}
                    />
                  ) : null}
                </button>
              ))}
          </div>
        </div>
        <div className="w-full md:w-1/3 text-sm md:text-base text-gray-700 md:pl-6 md:mt-20 lg:mt-20">
          {selectedVariant && (
            <>
              <Link
                href="/login"
                className="font-bold text-red-500 hover:text-gray-700"
              >
                Login or Register
              </Link>{" "}
              to view product prices
              <p className="mt-2">
                <strong>
                  {selectedVariant.type === "color" ? "Color" : "Style"}:
                </strong>{" "}
                {selectedVariant.name}
                <div className="flex flex-wrap gap-2 justify-center">
                  {product.variants &&
                    product.variants.map((variant) => (
                      <button
                        key={variant.name}
                        onClick={() => handleVariantChange(variant)}
                        className="mt-1 w-6 h-6 md:w-6 md:h-6"
                        aria-label={`Select ${variant.name}`}
                      >
                        {variant.type === "color" ? (
                          <div
                            className="w-full h-full"
                            title={variant.name}
                            style={{ backgroundColor: variant.hex }}
                          ></div>
                        ) : null}
                      </button>
                    ))}
                </div>
              </p>
              <div className="flex flex-wrap gap-2 my-4">
                {product.thumbnails &&
                  product.thumbnails.map((thumbnail) => (
                    <button
                      key={thumbnail.name}
                      onClick={() => handleVariantChange(thumbnail)}
                      className="w-12 h-12 md:w-16 md:h-16"
                      aria-label={`Select ${thumbnail.name}`}
                    >
                      <Image
                        src={thumbnail.image}
                        alt={thumbnail.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover opacity-50 hover:opacity-100"
                        onClick={() => handleImageClick(thumbnail.image)}
                      />
                    </button>
                  ))}
              </div>
              <p className="mt-4 ">
                <strong>Description:</strong> {selectedVariant.description}
              </p>
              <p className="mt-4 ">
                <strong>in stock:</strong>
                {selectedVariant.stock}
              </p>
            </>
          )}

          <div className="flex flex-col space-y-4 mt-6">
            <div className="relative w-24">
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-full pr-8 pl-2 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
              />
              <div className="absolute right-0 top-0 bottom-0 w-6 flex flex-col">
                <button
                  onClick={incrementQuantity}
                  className="flex-1 flex items-center justify-center text-gray-500 hover:bg-gray-100 focus:outline-none"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  onClick={decrementQuantity}
                  className="flex-1 flex items-center justify-center text-gray-500 hover:bg-gray-100 focus:outline-none"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <Link
              href="/login"
              className="w-full md:w-auto px-4 py-2 text-center bg-red-500 hover:bg-red-700 text-white rounded"
            >
              Login
            </Link>
            <button
              className="w-full md:w-auto px-4 py-2 text-center border-red-500 border-2 text-red-500 rounded hover:bg-gray-200 transition-colors"
              onClick={() => setShowModal(true)}
            >
              View Stock
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
