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
    title: "Kids Activ-T",
    image: "/Kids-Activ-T-Navy.jpg",
    image2: "/Kids-Activ-T-Slate-Grey.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 2,
    title: "Congo",
    image: "/Congo-Olive-Grey-Foc.jpg",
    image2: "/Congo-Olive-Grey-Soc.jpg",
    rating: 5.0,
    status: "soldout",
  },
  {
    id: 3,
    title: "Kids Promo Long Sleeve T-Shirt",
    image: "/model-Kids-Long-Sleeve.jpg",
    image2: "/Kids-Long-Sleeve-T-Shirt-Royal.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 4,
    title: "Mumbo",
    image: "/Mumbo-Navy-Foc.jpg",
    image2: "/Mumbo-Navy-Soc.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 5,
    title: "Lion Cub",
    image: "/Lion-Kub-Foc-front.jpg",
    image2: "/Lion-Kub-Soc-side.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 6,
    title: "Kids Cheeky",
    image: "/Cheeky-Pink-Foc1.jpg",
    image2: "/Cheeky-Pink-Soc.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 7,
    title: "Kids Hoodie",
    image: "/Kids-Hoodie-Red.jpg",
    image2: "/Kids-Hoodie-Burgundy.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 8,
    title: "Kids Promo T-Shirt",
    image: "/Kids-Promo-T-Shirt-model-1.jpg",
    image2: "/Kids-Promo-T-Shirt-Yellow2-scaled.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 9,
    title: "Kids Golfer",
    image: "/Kids-Golfer-modal-scaled.jpg",
    image2: "/Kids-Golfer-Red1-1-scaled.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 10,
    title: "Kids Cricket Hat",
    image: "/Kids-Cricket-model.jpg",
    image2: "/Kids-Cricket-Hat-Bottle-Foc.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 11,
    title: "Kids Fisherman Cap",
    image: "/Kids-Fisherman-model.jpg",
    image2: "/Kids-Fisherman-Navy-Foc.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 12,
    title: "Kids Aspen Gloves",
    image: "/Kids-Aspen-Gloves-model.jpg",
    image2: "/Kids-Aspen-Gloves-Navy1.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 13,
    title: "Kids Phoenix Bucket Hat",
    image: "/Kids-Phoenix-model.jpg",
    image2: "/Kids-Phoenix-Hat-Burgundy.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 14,
    title: "Kids Americano Cap",
    image: "/Kids-Americano-model.jpg",
    image2: "/Americano-Airforce-Foc-.jpg",
    rating: 5.0,
    status: "",
  },
  {
    id: 15,
    title: "Kids Superior 5 Panel Cap",
    image: "/Superior-5-Panel-Bottle-Foc1-scaled.jpg",
    image2: "/Superior-5-Panel-Burgundy-Foc1-scaled.jpg",
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
            src="/kids-collection-bg1.jpg"
            width={1834}
            height={668}
            alt="kids collection"
            className="w-full h-[200px] sm:h-[300px] filter object-top brightness-75 blur-sm"
            style={{ objectFit: "cover" }}
          />
          <div class="absolute inset-0 opacity-50"></div>
          <div className="absolute top-20 sm:top-5 md:top-20 lg:top-24 w-full font-bold bg-opacity-50 text-white left-7 px-4">
            <span className="text-5xl  sm:text-4xl md:text-5xl lg:text-7xl">
              <span className="text-cyan-400 sm:flex-wrap">KIDS</span>{" "}
              COLLECTION
            </span>
          </div>
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
                  Kids
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
