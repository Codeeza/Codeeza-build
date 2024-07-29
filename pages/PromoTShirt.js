"use client";

import React, { useState } from "react";

const PromoTShirt = () => {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <main className="py-3">
      <div className="card card-compact rounded-md object-cover w-90">
        <figure>
          <img
            src={
              isHovered
                ? "https://captivity.co.za/wp-content/uploads/2023/04/Kids-Promo-T-Shirt-Lime2.jpg"
                : "https://captivity.co.za/wp-content/uploads/2022/02/Promo-T-Shirt-Model-1.jpg"
            }
            alt=" Female Model with a red T-Shirt"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </figure>
        <div className="card-body bg-gray-300 rounded-b hover:shadow-lg">
          <h2 className="card-title flex justify-center">Promo T-Shirt</h2>
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

export default PromoTShirt;