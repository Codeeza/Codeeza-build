"use client";
import { useState } from "react";
import Link from "next/link";

import { GoHomeFill } from "react-icons/go";
import { TbCategoryFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-black text-white ">
        <div className="flex items-center justify-center font-bold text-xs mx-auto z-10 md:flex w-full py-4 px-8">
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <Link href="/">
            <span className="text-1xl">
              <Image
                src="/captivity-logo-white.png"
                alt="captivityLogo"
                width={160}
                height={10}
                className="flex items-center justify-center mr-10"
              />
            </span>
          </Link>
          {/* Mobile Phone login */}
          <Link
            href={"/login"}
            className="font-bold md:hidden lg:hidden hover:text-gray-500"
          >
            Login
          </Link>

          <div className="hidden md:flex items-center space-x-20 ml-5">
            <Link href="/Help" className="hover:text-gray-500">
              <span>Help</span>
            </Link>
            <div className="md:flex md:flex-nowrap">
              <input
                type="text"
                placeholder="Search for product"
                className="px-2 w-[150px] py-2 rounded-l-sm text-black"
              />
              <button className="bg-red-600 rounded-r-sm mr-20 text-white px-3 py-3">
                SEARCH
              </button>
            </div>
            <Link href="/login" className="hover:text-gray-500">
              <span>Login</span>
            </Link>
            <div>
              <RxDividerVertical />
            </div>
            <Link href="/register" className="hover:text-gray-500">
              <span>Register</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black shadow-xl z-10">
          <ul>
            <li
              className="px-4 py-2 font-bold hover:bg-gray-200 hover:text-red-500"
              onClick={() => handleNavigation("/collection/headwear")}
            >
              Headwear Collection
            </li>
            <li
              className="px-4 py-2 font-bold hover:bg-gray-200 hover:text-red-500"
              onClick={() => handleNavigation("/collection/apparel")}
            >
              Apparel Collection
            </li>
            <li
              className="px-4 py-2 font-bold hover:bg-gray-200 hover:text-red-500"
              onClick={() => handleNavigation("/collections")}
            >
              All Collections
            </li>
            <li
              className="px-4 py-2 font-bold hover:bg-gray-200 hover:text-red-500"
              onClick={() => handleNavigation("/catalogue")}
            >
              Catalogue
            </li>
            <li
              className="px-4 py-2 font-bold hover:bg-gray-200 hover:text-red-500"
              onClick={() => handleNavigation("/clearance")}
            >
              CLEARANCE
            </li>
            <li
              className="px-4 py-2 font-bold hover:bg-gray-200 hover:text-red-500"
              onClick={() => handleNavigation("https://captivity.co.za/faqs/")}
            >
              Help
            </li>

            <li
              className="px-4 py-2 font-bold hover:bg-gray-200 hover:text-red-500"
              onClick={() => handleNavigation("/register")}
            >
              Register
            </li>
          </ul>
        </div>
      )}
      {/* Mobile search bar */}
      <div className=" md:hidden lg:hidden m-2">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search for product"
            className="px-2 w-[150px] py-2 rounded-l-sm text-black border-2"
          />
          <button className="bg-red-600 rounded-r-sm text-white px-2 py-2">
            SEARCH
          </button>
        </div>
      </div>
      {/* Mobile bottom Nav */}
      <div className="md:hidden fixed inset-x-0 bottom-0 bg-white shadow-xl shadow-gray-400 border-t-4 border-t-slate-400 border-2 ml-5 mr-5 z-10">
        <div className="flex justify-around text-gray-500">
          <Link
            href="/"
            className="flex flex-col items-center py-2 hover:text-red-500"
          >
            <GoHomeFill />
            <div className="text-xs mt-2">Home</div>
          </Link>
          <Link
            href="/mobileCategories"
            className="flex flex-col items-center py-2 hover:text-red-500"
          >
            <TbCategoryFilled />
            <div className="text-xs mt-2">Categories</div>
          </Link>
          <Link
            href="/Favourites"
            className="flex text-gray-600 flex-col items-center py-2  hover:text-red-500"
          >
            <FaHeart />
            <div className="text-xs mt-2">Favourites</div>
          </Link>
          <Link
            href="/Login"
            className="flex flex-col items-center py-2 s hover:text-red-500"
          >
            <MdAccountCircle />
            <div className="text-xs mt-2">Account</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
