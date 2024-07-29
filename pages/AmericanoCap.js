"use client"


import React, { useState } from "react";

const AmericanoCap = () => {
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
                ? "https://captivity.co.za/wp-content/uploads/2023/09/Americano-Royal-Foc1-scaled.jpg"
                : "https://captivity.co.za/wp-content/uploads/2020/11/Americano-model-scaled.jpg"
            }
            alt="Male model with a blue cap and blue T-Shirt"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </figure>
        <div className="card-body bg-gray-300 rounded-b  hover:shadow-lg">
          <h2 className="card-title flex justify-center">Americano Cap</h2>
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

export default AmericanoCap;