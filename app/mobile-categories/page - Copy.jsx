const MobileCategories = () => {
  const items = [
    { id: 1, image: "item1.jpg", name: "Men", price: "29.99" },
    { id: 2, image: "item2.jpg", name: "Woman", price: "19.99" },
    { id: 3, image: "item3.jpg", name: "Kids", price: "39.99" },
    { id: 4, image: "item4.jpg", name: "T-Shirts", price: "29.99" },
    { id: 5, image: "item5.jpg", name: "Golfers", price: "19.99" },
    { id: 6, image: "item6.jpg", name: "Hoodies", price: "39.99" },
    { id: 7, image: "item7.jpg", name: "Jackets", price: "29.99" },
    { id: 8, image: "item8.jpg", name: "Bottoms", price: "19.99" },
  ];

  return (
    <>
      <h1 className="rext-black">Mobile</h1>
      <div className="flex justify-center bg-blue-800">
        <ul>
          {items.map((item) => (
            <li className="   bg-red-700">
              <a href="#new" className="text-gray-600 hover:text-gray-900">
                <Card
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileCategories;

import React from "react";

const Card = ({ image, name, price }) => {
  return (
    <div className=" mx-96 my-12  w-full  shadow-lg bg-yellow-700 text-gray-700">
      <div className="flex justify-center bg-lime-300">
        <img
          className=" max-w-sm rounded-2xl "
          src={`/images/${image}`}
          alt={name}
        />
      </div>
      <div className="bg-orange-700 px-6 py-4">
        <div className="font-bold text-gray-700 text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base ">${price}</p>
      </div>
    </div>
  );
};
