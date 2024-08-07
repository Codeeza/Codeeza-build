"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ClassicTShirt = () => {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <main className="py-3">
      <div className="card card-compact  rounded-md object-cover w-90">
        <figure>
        <Link href="/products/classic-t-shirt">
          <Image
            src={
              isHovered
                ? "/Classic-T-Shirt-Airforce-Blue2.jpg"
                : "/Classic-T-Shirt-Model-2.jpg"
            }
            alt="Blue T-Shirt"
            width={1834}
            height={1834}
            style={{ cursor: 'pointer' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          </Link>
        </figure>

        <div className="card-body bg-gray-300 rounded-b hover:shadow-lg">
          <h2 className="card-title flex justify-center">Classic T-Shirt</h2>
          <div className="rating flex justify-center">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-yellow-500"
              default
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-yellow-500"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClassicTShirt;
