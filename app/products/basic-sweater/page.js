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
        /{" "}
        <span className="text-black font-semibold">
          Basic Crew Neck Sweater
        </span>
        <h2 className="text-4xl text-red-600 mt-4 font-medium">
          BASIC CREW NECK SWEATER
        </h2>
      </div>
    </div>
  );
};

export default page;
