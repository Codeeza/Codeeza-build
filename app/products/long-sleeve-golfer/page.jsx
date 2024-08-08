<<<<<<< HEAD:app/products/long-sleeve-golfer/page.jsx
"use client"

import React from "react";

const page = () => {
  return (
    <div>
      <nav className="text-sm text-gray-500">
        Home / Apparel Collection /{" "}
        <span className="text-black font-semibold">Long Sleeve Golfer</span>
      </nav>
      <h1 className="text-4xl font-bold text-red-600 mt-4">
        LONG SLEEVE GOLFER
      </h1>
    </div>
  );
};

export default page;
=======
"use client";

import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-sm text-gray-500">
        <Link href="/" className="text-gray-500 hover:text-gray-700">
          Home
        </Link>{" "}
        /{" "}
        <Link
          href="/apparel/apparel-collection"
          className="text-gray-500 hover:text-gray-700"
        >
          Apparel Collection
        </Link>{" "}
        / <span className="text-black font-semibold">Long Sleeve Golfer</span>
        <h2 className="text-4xl font-medium text-red-600 mt-4">
          LONG SLEEVE GOLFER
        </h2>
      </div>
    </div>
  );
};

export default page;
>>>>>>> cb3de90 (	modified:   app/products/basic-sweater/page.js):app/products/long-sleeve-golfer/page.js
