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
<<<<<<< HEAD
        <div className="flex items-center justify-center font-bold text-xs mx-auto z-10 md:flex w-full py-4 px-8">
          <div className="md:hidden">
=======
>>>>>>> 9e8e47b (Create test)
        <div className="flex items-center justify-center text-xs mx-auto z-10 md:flex w-full py-6 px-8 m-auto">
          <div className="md:hidden absolute top-6 left-7">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 "
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
                width={170}
                height={10}
                className="flex items-center justify-between md:min-w-40 h-auto "
              />
            </span>
          </Link>
          {/* Mobile Phone login */}
          <Link
            href={"/login"}
<<<<<<< HEAD
            className="font-bold md:hidden lg:hidden hover:text-gray-500"
          />
          <Link
            href={"/login"}
=======
>>>>>>> 9e8e47b (Create test)
            className="font-bold md:hidden absolute top-6 right-7 text-lg lg:hidden hover:text-gray-300"
          >
            Login
          </Link>

<<<<<<< HEAD
          <div className="hidden md:flex items-center space-x-20 ml-5">
            <Link href="/Help" className="hover:text-gray-500">
              <span>Help</span>
              </Link>
=======
>>>>>>> 9e8e47b (Create test)
          <div className="hidden md:flex items-center space-x-20 ">
            <Link href="/help" className="hover:text-gray-300">
              <span className="ml-5">Help</span>
            </Link>
            <div className="md:flex md:flex-nowrap">
              <input
                type="text"
                placeholder="Search for product"
                className="px-2 w-[150px] py-2 rounded-l-sm text-black"
              />
              <button className="bg-red-600 text-lg rounded-r-sm mr-16 text-white px-2 py-2 hover:bg-red-500">
                SEARCH
              </button>
            </div>
<<<<<<< HEAD
            <Link href="/login" className="hover:text-gray-500">
              <span>Login</span>
              </Link>
=======
>>>>>>> 9e8e47b (Create test)
            <Link href="/login">
              <span className="hover:text-gray-300">Login</span>
            </Link>
            <div>
              <RxDividerVertical className="-mr-5" />
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <Link href="/register" className="hover:text-gray-500">
              <span>Register</span>
            </Link>
          </div>
        </div>
        </div>
      
      </div>
=======
            <Link href="register">
=======
            <Link href="/register">
>>>>>>> 4e34900 (	modified:   app/Login/page.js)
              <span className="hover:text-gray-300 -ml-16">Register</span>
            </Link>
          </div>
        </div>
      </nav>
>>>>>>> 9e8e47b (Create test)

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black shadow-xl z-10">
          <ul>
            <li
<<<<<<< HEAD
              className="px-4 py-2 font-bold hover:bg-gray-200 hover:text-red-500"
=======
              className="px-4 py-2 hover:bg-gray-200 hover:text-red-500"
>>>>>>> 9e8e47b (Create test)
              onClick={() => handleNavigation("/collection/headwear")}
            >
              Headwear Collection
            </li>
            <li
<<<<<<< HEAD
              className="px-4 py-2 font-bold hover:bg-gray-200 hover:text-red-500"
=======
              className="px-4 py-2 hover:bg-gray-200 hover:text-red-500"
>>>>>>> 9e8e47b (Create test)
              onClick={() => handleNavigation("/collection/apparel")}
            >
              Apparel Collection
            </li>
            <li
<<<<<<< HEAD
              className="px-4 py-2 font-bold hover:bg-gray-200 hover:text-red-500"
=======
              className="px-4 py-2 hover:bg-gray-200 hover:text-red-500"
>>>>>>> 9e8e47b (Create test)
              onClick={() => handleNavigation("/collections")}
            >
              All Collections
            </li>
            <li
<<<<<<< HEAD
              className="px-4 py-2 font-bold hover:bg-gray-200 hover:text-red-500"
=======
              className="px-4 py-2 hover:bg-gray-200 hover:text-red-500"
>>>>>>> 9e8e47b (Create test)
              onClick={() => handleNavigation("/catalogue")}
            >
              Catalogue
            </li>
            <li
<<<<<<< HEAD
              className="px-4 py-2 font-bold hover:bg-gray-200 hover:text-red-500"
=======
              className="px-4 py-2 hover:bg-gray-200 hover:text-red-500"
>>>>>>> 9e8e47b (Create test)
              onClick={() => handleNavigation("/clearance")}
            >
              CLEARANCE
            </li>
<<<<<<< HEAD
            <li
              className="px-4 py-2 font-bold hover:bg-gray-200 hover:text-red-500"
              onClick={() => handleNavigation("https://captivity.co.za/faqs/")}
            >
              Help
            </li>

            <li
              className="px-4 py-2 font-bold hover:bg-gray-200 hover:text-red-500"
=======
            <li className="px-4 py-2 hover:bg-gray-200 hover:text-red-500">
              <Link href={"/help"}>Help</Link>
            </li>

            <li
              className="px-4 py-2 hover:bg-gray-200 hover:text-red-500"
>>>>>>> 9e8e47b (Create test)
              onClick={() => handleNavigation("/register")}
            >
              Register
            </li>
          </ul>
        </div>
      )}
      {/* Mobile search bar */}
      <div className=" md:hidden lg:hidden m-2">
        <div className="flex items-center justify-center border-b-2 p-2">
          <input
            type="text"
            placeholder="Search for product"
            className="px-2 w-[150px] py-2 rounded-l-sm text-black border-2"
          />
          <button className="bg-red-600 hover:bg-red-500 rounded-r-sm text-white px-2 py-2">
            SEARCH
          </button>
        </div>
      </div>
      {/* Mobile bottom Nav */}
      {/* just a test */}
      <div className="md:hidden fixed inset-x-0 bottom-0 bg-white shadow-xl shadow-gray-400 border-t-2 border-t-gray-400 border-2 ml-5 mr-5 z-10">
        <div className="flex justify-around text-gray-500 m-auto">
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
<<<<<<< HEAD
    </nav>
    </div>
=======
>>>>>>> 9e8e47b (Create test)
  );
};

export default Navbar;
