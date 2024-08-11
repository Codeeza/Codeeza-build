"use client";
import ProductCarousel from "@/components/ProductPageCarousel/ProductCarousel";
import SideMenuDopDown from "@/components/ProductPageSideMenuDropDown/SideMenuDopDown";
import SortDropdown from "@/components/SortCardsDropdown/SortDropdown";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Active-T Long Sleeve",
    image: "/Activ-T-Long-Sleeve-Royal.jpg",
    image2: "/Premium-Long-Sleeve-T-Shirt-Stone-scaled.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 2,
    title: "Long Sleeve Golfer",
    image: "/Long-Sleeve-Golfer-Red1.jpg",
    image2: "/Long-Sleeve-Golfer-Charcoal-gray.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 3,
    title: "Ice Beanie",
    image: "/ice-beanie-dusty-pink-.jpg",
    image2: "/ice-beanie-burnt-orange-.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 4,
    title: "Promo T-Shirt",
    image: "/Promo-T-Shirt-Model-1.jpg",
    image2: "/Promo-T-Shirt-Red.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 5,
    title: "Premium Long Sleeve T-Shirt",
    image: "/Premium-Long-Sleeve-T-Shirt-Orange1.jpg",
    image2: "/Premium-Long-Sleeve-T-Shirt-Yellow.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 6,
    title: "Funky T-Shirt",
    image: "/Funky-tshirt-Rainbow-Front.jpg",
    image2: "/Funky-tshirts-Tropical-Front.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 7,
    title: "Artic Body Warmer",
    image: "/Arctic-Body-Warmer-model-scaled2.jpg",
    image2: "/Arctic-Body-Warmer-Black.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 8,
    title: "Alaska Puffer Jacket",
    image: "/Alaska-Puffer-Jacket-Black.jpg",
    image2: "/Alaska-Puffer-Jacket-Navy1.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 9,
    title: "Unisex V-Neck T-Shirt",
    image: "/Unisex-V-Neck-T-Shirt-Black1.jpg",
    image2: "/Unisex-V-Neck-T-Shirt-Fuchsia.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 10,
    title: "Classic T-Shirt",
    image: "/Classic-T-Shirt-Model-2.jpg",
    image2: "/Classic-T-Shirt-Mint-Green.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 11,
    title: "Ladies Classic T-Shirt",
    image: "/Ladies-Classic-T-Shirt-Grey-Melange1.jpg",
    image2: "/Ladies-Classic-T-Shirt-Red.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 12,
    title: "Vintage Trucker",
    image: "/Vintage-Trucker-Three-Tone-Orange-White-Orange-Foc.jpg",
    image2: "/Vintage-Trucker-Three-Tone-Orange-White-Orange-Soc.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 13,
    title: "FWRD Leggings",
    image: "/Fwrd-Leggings-model.jpg",
    image2: "/Fwrd-Leggings-black-front.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 14,
    title: "Basic 6 Panel Camo Cap",
    image: "/Basic-6-Panel-Camo-forrest-Foc1.jpg",
    image2: "/Basic-6-Panel-Camo-forrest-boc1.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 15,
    title: "Ranger Hat",
    image: "/Ranger-Hat-Camo-Green-Foc1.jpg",
    image2: "/Ranger-Hat-Camo-Green-bottom.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 16,
    title: "Ladies Fitted V-Neck T-Shirt",
    image: "/Ladies-Fitted-V-Neck-model.jpg",
    image2: "/Ladies-Fitted-V-Neck-T-Shirt-White12.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 17,
    title: "Ladies Pro Golfer",
    image: "/Ladies_Golfer-model.jpg",
    image2: "/Ladies-Pro-Golfer.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 18,
    title: "Multifuctional Headwear Camo",
    image: "/Multifuctional-Headwear-Camo-model.jpg",
    image2: "/Multifuctional-Headwear-Camo-Autumn.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 19,
    title: "Ladies Raceback Vest",
    image: "/Ladies-Raceback-model.jpg",
    image2: "/Ladies-Raceback-Vest-Black.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 20,
    title: "Original Trucker Camo",
    image: "/Original-Trucker-Camo-model.jpg",
    image2: "/Original-Trucker-Camo-Woodland-Foc1.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 21,
    title: "Classic Camo T-Shirt",
    image: "/Classic-Camo-T-Shirt-model.jpg",
    image2: "/Classic-Camo-T-Shirt-Green.jpg",
    rating: 5.0,
    status: "",
  },
];

export default function Page() {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  function handleMouseEnter(productId) {
    setHoveredProductId(productId);
  }

  function handleMouseLeave() {
    setHoveredProductId(null);
  }
  return (
    <div>
      <div className="w-full">
        <div className="relative group overflow-hidden">
          <Image
            src="/w-a.png"
            width={2500}
            height={1333}
            alt="women apparel"
            //style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="container m-5">
          {" "}
          <div className="flex">
            {/* Side Menu */}
            <div className="space-y-5 md:mr-10 lg:mr-10 xl:mr-10 xl:ml-20 lg:ml-20 md:ml-20">
          
              <aside className="w-[300px] mb-0 hidden lg:block">
                <ul className="menu border-2 p-2 text-gray-700">
                  <span className="text-xl font-bold">HEADWEAR</span>
                  <li>
                    <Link href="/headwear/new-in-headwear">
                      New in Headwear
                    </Link>
                  </li>
                  <li>
                    <Link href="/headwear/flat-peaks">Flat Peaks</Link>
                  </li>
                  <li>
                    <Link href="/headwear/pre-curved-peaks">
                      Pre-Curved Peaks
                    </Link>
                  </li>
                  <li>
                    <Link href="/headwear/hats">Hats</Link>
                  </li>
                  <li>
                    <Link href="/headwear/multifunctional-headwear">
                      Multifunctional Headwear
                    </Link>
                  </li>
                  <li>
                    <Link href="/headwear/beanies">Beanies</Link>
                  </li>
                  <li>
                    <Link href="/headwear/trucker-caps">Trucker Caps</Link>
                  </li>
                  <li>
                    <Link href="/headwear/bucket-hats">Bucket Hats</Link>
                  </li>
                </ul>
              </aside>
              <aside className="w-[300px] hidden lg:block">
                <ul className="menu border-2 p-2 text-gray-700">
                  <span className="text-xl font-bold">APPAREL</span>
                  <li>
                    <Link href="/apparel/new-in-apparel">New in Apparel</Link>
                  </li>
                  <li>
                    <Link href="/apparel/men">Men</Link>
                  </li>
                  <li>
                    <Link href="/apparel/women">Women</Link>
                  </li>
                  <li>
                    <Link href="/apparel/kids">Kids</Link>
                  </li>
                  <li>
                    <Link href="/apparel/t-shirts">T - Shirts</Link>
                  </li>
                  <li>
                    <Link href="/apparel/golfers">Golfers</Link>
                  </li>
                  <li>
                    <Link href="/apparel/hoodies">Hoodies</Link>
                  </li>
                  <li>
                    <Link href="/apparel/jackets">Jackets</Link>
                  </li>
                  <li>
                    <Link href="/apparel/bottoms">Bottoms</Link>
                  </li>
                </ul>
              </aside>
              <SideMenuDopDown />
              <ProductCarousel />
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4 m-5">
              {/* Products Grid */}
              <div className="mb-20">
                <span className="font-bold ml-5 text-2xl text-gray-400">
                  Women
                </span>
              </div>
              <div className="grid sm:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="card rounded-md bg-gray-200 shadow-sm hover:shadow-xl"
                  >
                    <figure>
                      <Image
                        src={
                          hoveredProductId === product.id
                            ? product.image2
                            : product.image
                        }
                        alt={product.title}
                        id={product.id}
                        onMouseEnter={() => handleMouseEnter(product.id)}
                        onMouseLeave={handleMouseLeave}
                        width={300}
                        height={200}
                      />
                    </figure>
                    <div className="card-compact p-2">
                      <h2 className="card-title text-sm text-black">
                        {product.title}
                        {product.status === "new" && (
                          <div className="absolute top-5 left-5  badge badge-secondary p-2 ml-2">
                            New
                          </div>
                        )}
                        {product.status === "soldout" && (
                          <div className="absolute top-5 left-5 badge badge-error p-4 ml-2">
                            Sold Out
                          </div>
                        )}
                      </h2>
                      <p className="text-yellow-500">
                        {"★".repeat(Math.floor(product.rating))}
                        {product.rating % 1 !== 0 && "★"}
                      </p>
                      <p>{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
