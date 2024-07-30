import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Categories = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex items-center w-full text-sm font-bold justify-center gap-5">
        <div className="hidden md:flex items-center space-x-8 px-20 md:px-20 ">
          <div className="relative group ">
            <button className="focus:outline-none px-10 py-2 items-center flex text-gray-600 hover:text-gray-400">
              Headwear Collection
              <MdKeyboardArrowDown />
            </button>

            <div className=" z-10 items-center absolute left-0 ml-8 mt-0 w-52 bg-white text-gray-600 rounded-md shadow-lg hidden group-hover:block">
              <ul>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  NEW in Headwear
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Flat peaks
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Pre-curved Peaks
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Hats
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Multifunctional Headwear
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Beanies
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Trucker Caps
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Bucket Hats
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <button className="focus:outline-none flex items-center px-10 py-2 text-gray-600 hover:text-gray-400">
              Apparel Collection
              <MdKeyboardArrowDown />
            </button>
            <div className=" z-10 absolute left-0 ml-8 mt-0 w-52 bg-white text-gray-600 rounded shadow-lg hidden group-hover:block">
              <ul>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  NEW in Apparel
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Men
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Women
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Kids
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  T-Shirts
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Golfers
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Hoodies
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Jackets
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Bottoms
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <button className="focus:outline-none flex items-center px-10 py-2 text-gray-600 hover:text-gray-400">
              All Collection
              <MdKeyboardArrowDown />
            </button>
            <div className=" z-10 absolute left-0 ml-8  mt-0 w-52 bg-white text-gray-600 rounded shadow-lg hidden group-hover:block">
              <ul>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Signature Collection
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Baseball Collection
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Fashion Collection
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Leisure Collection
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Sport Collection
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Industrial Collection
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Camo Collection
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Winter Collection
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  Kids Collection
                </li>
                <li className="px-4 py-2  hover:text-red-600 hover:bg-gray-200">
                  African Collection
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="focus:outline-none block px-10 py-4 text-gray-600 hover:text-gray-400">
              Catalogue
            </button>
          </div>

          <button className="focus:outline-none block px-10 py-4 text-gray-600 hover:text-gray-400">
            CLEARANCE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
