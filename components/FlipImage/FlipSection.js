"use client";

import React from "react";
import ReactCardFlip from "react-card-flip";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const FlipSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="p-5">
      <div className="max-w-6xl mx-auto bg-white flex">
        <div className="w-1/2">
          <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
            <Link
              href="https://fwrd.co.za/"
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              <Image src="/fwrd.png" alt="fwrd" width={841} height={465} />
            </Link>
            <Link
              href="https://fwrd.co.za/"
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              <button className="bg-red-600 border-2 border-white text-white hover:bg-black rounded px-6 py-3 absolute mt-3 top-44 left-52">
                Take me there
              </button>
              <Image
                src="/fwrdFlipPicture.png"
                alt="fwrd2"
                width={841}
                height={465}
              />
            </Link>
          </ReactCardFlip>
        </div>
        <div className="w-1/2 px-10">
          <h2 className="text-3xl font-bold text-red-600 pb-5">
            VISIT THE FWRD WEBSITE
          </h2>
          <p className="text-gray-500 text-md mb-8 py-4">
            The FWRD Brand is distributed via promotional companies,
            advertising, event companies and resellers ONLY.
          </p>
          <Link href="https://fwrd.co.za/">
            <button className="bg-red-500 hover:bg-black text-white px-10 py-3 rounded">
              Visit Site
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlipSection;
