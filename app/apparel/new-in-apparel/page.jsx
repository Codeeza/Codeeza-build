"use client";
import ProductCarousel from "@/components/ProductPageCarousel/ProductCarousel";
import SideMenuDopDown from "@/components/ProductPageSideMenuDropDown/SideMenuDopDown";
import SortDropdown from "@/components/SortCardsDropdown/SortDropdown";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Boston Hoodie",
      image: "/Boston-Hoodie-White-moodel.jpg",
      image2: "/Boston-Hoodie-Charcoal-Melange2.jpg",
      rating: 5.0,
      status: "", // 'soldout' or 'new'
    },
    {
      id: 2,
      title: "Drawstring",
      image: "/Drawstrings-Orange.jpg",
      image2: "/Drawstrings-Emerald.jpg",
      rating: 5.0,
      status: "",
    },
    {
      id: 3,
      title: "Alaska Puffer Jacket",
      image: "/Alaska-Puffer-Jacket-Black.jpg",
      image2: "/Alaska-Puffer-Jacket-Navy1.jpg",
      rating: 5.0,
      status: "",
    },
    {
      id: 4,
      title: "Long Sleeve Golfer",
      image: "/Long-Sleeve-Golfer-Charcoal-gray.jpg",
      image2: "/Long-Sleeve-Golfer-Red1.jpg",
      rating: 5.0,
      status: "",
    },
    {
      id: 5,
      title: "Funky T-Shirt",
      image: "/Funky-tshirt-Rainbow-Front.jpg",
      image2: "/Funky-tshirts-Tropical-Front.jpg",
      rating: 5.0,
      status: "",
    },
    {
      id: 6,
      title: "Active-T Long Sleeve",
      image: "/Activ-T-Long-Sleeve-Royal.jpg",
      image2: "/Premium-Long-Sleeve-T-Shirt-Stone-scaled.jpg",
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
      title: "V-Neck T-Shirt",
      image: "/model1.jpg",
      image2: "/Unisex-V-Neck-T-Shirt-model.jpg",
      rating: 5.0,
      status: "",
    },
    // Add more products as needed
  ]);
  const handleSortChange = (sortValue) => {
    let sortedProducts = [...products];

    switch (sortValue) {
      case "popularity":
        sortedProducts.sort((a, b) => b.popularity - a.popularity);
        break;
      case "rating":
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "latest":
        // Assuming latest means newest items, here we just sort by ID for simplicity
        sortedProducts.sort((a, b) => b.id - a.id);
        break;
      case "priceLowToHigh":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setProducts(sortedProducts);
  };

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
            src="/new-in-apparel-bg.jpg"
            width={2000}
            height={1333}
            alt="Headwear-collection-Header"
            className="w-full h-[200px] sm:h-[300px] object-bottom filter brightness-100"
            style={{ objectFit: "cover" }}
          />
          <div class="absolute inset-0 bg-teal-500 bg-opacity-50"></div>
          <div className="absolute top-20 sm:top-5 md:top-20 lg:top-24 w-full font-bold bg-opacity-50 text-white left-10 px-4">
            <span className="text-5xl sm:flex-wrap sm:text-4xl md:text-5xl lg:text-7xl">
              <span className="text-yellow-500">NEW IN</span> APPAREL
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
              <ProductCarousel />
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
              <div>
                <SortDropdown onSortChange={handleSortChange} />
              </div>

              {/* Products Grid */}
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
