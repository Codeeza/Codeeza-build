"use client";

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
          <img
            src={
              isHovered
                ? "https://captivity.co.za/wp-content/uploads/2023/03/Classic-T-Shirt-Airforce-Blue2.jpg"
                : "https://captivity.co.za/wp-content/uploads/2020/12/Classic-T-Shirt-Model-2.jpg"
            }
            alt="Female Model with a baby blue T-Shirt"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
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