"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const AspenBeanie = () => {
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
        <Link href="/products/aspen-beanie">
          <Image
            src={
              isHovered
                ? "/Aspen-Beanie-Lime.jpg"
                : "/Aspen-Beanie-model.jpg"
            }
            alt="Orange Beanie"
            width={1834}
            height={1834}
            style={{ cursor: 'pointer' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          </Link>
        </figure>
        <div className="card-body bg-gray-300 rounded-b hover:shadow-lg">
          <h2 className="card-title flex justify-center">Aspen Beanie</h2>
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

export default AspenBeanie;
