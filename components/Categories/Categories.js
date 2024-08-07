import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Categories = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex items-center w-full text-sm font-bold justify-center gap-5">
        <div className="hidden md:flex items-center space-x-8 px-20 md:px-20 ">
          <div className="relative group ">
            <button className="focus:outline-none px-10 py-2 items-center flex text-gray-600 hover:text-gray-400">
              <Link href="/headwear/headwear-collection">
                Headwear Collection{" "}
              </Link>
              <MdKeyboardArrowDown />
            </button>

            <div className=" z-10 items-center absolute left-0 ml-8 mt-0 w-52 bg-white text-gray-600 rounded-md shadow-lg hidden group-hover:block">
              <ul>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/headwear/new-in-headwear">NEW in Headwear</Link>
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/headwear/flat-peaks">Flat peaks</Link>
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/headwear/pre-curved-peaks">
                    Pre-curved Peaks
                  </Link>
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/headwear/hats">Hats</Link>
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/headwear/multifunctional-headwear">
                    Multifunctional Headwear
                  </Link>
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/headwear/beanies">Beanies</Link>
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/headwear/trucker-caps">Trucker Caps</Link>
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/headwear/bucket-hats">Bucket Hats</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <button className="focus:outline-none flex items-center px-10 py-2 text-gray-600 hover:text-gray-400">
              <Link href="/apparel/apparel-collection">Apparel Collection</Link>

              <MdKeyboardArrowDown />
            </button>
            <div className=" z-10 absolute left-0 ml-8 mt-0 w-52 bg-white text-gray-600 rounded shadow-lg hidden group-hover:block">
              <ul>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/apparel/new-in-apparel">NEW in Apparel</Link>
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/apparel/men">Men</Link>
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/apparel/women"> Women</Link>
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/apparel/kids">Kids</Link>
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/apparel/t-shirts">T-Shirts</Link>
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/apparel/golfers">Golfers</Link>
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/apparel/hoodies">Hoodies</Link>
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/apparel/jackets">Jackets</Link>
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  <Link href="/apparel/bottoms">Bottoms</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <button className="focus:outline-none flex items-center px-10 py-2 text-gray-600 hover:text-gray-400">
            <Link href="/collections/all-collections">All Collection</Link>
              
              <MdKeyboardArrowDown />
            </button>
            <div className=" z-10 absolute left-0 ml-8  mt-0 w-52 bg-white text-gray-600 rounded shadow-lg hidden group-hover:block">
              <ul>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                <Link href="/collections/signature-collection">Signature Collection</Link>
                  
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                <Link href="/collections/baseball-collection">Baseball Collection</Link>
                  
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                <Link href="/collections/fashion-collection">Fashion Collection</Link>
                  
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                <Link href="/collections/leisure-collection">Leisure Collection</Link>
                  
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                <Link href="/collections/sport-collection">Sport Collection</Link>
                  
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                <Link href="/collections/industrial-collection">Industrial Collection</Link>
                  
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                <Link href="/collections/camo-collection">Camo Collection</Link>
                  
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                <Link href="/collections/winter-collection">Winter Collection</Link>
                  
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                <Link href="/collections/kids-collection">Kids Collection</Link>
                  
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                <Link href="/collections/african-collection">African Collection</Link>
                  
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <Link href="/catalogue" className="focus:outline-none block px-10 py-4 text-gray-600 hover:text-gray-400">
              Catalogue
            </Link>
          </div>

          <Link href="/clearance" className="focus:outline-none block px-10 py-4 text-gray-600 hover:text-gray-400">
            CLEARANCE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
