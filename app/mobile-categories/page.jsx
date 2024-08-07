import React from "react";

const MobileCategories = () => {
  return (
    <>
      <PictureMenuA />
      <PictureMenuB />
    </>
  );
};

export default MobileCategories;

const PictureMenuA = () => {
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
      <div className="flex justify-center"></div>

      <div className=" my-8 bg-black">
        <ul className="py-12 bg-blue-800">
          <h1 className="text-white text-4xl pl-8">Apparel</h1>
          {items.map((item) => (
            <li className=" mx-10  bg-red-700">
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

const Card = ({ image, name, price }) => {
  return (
    <div className=" my-12  w-full  shadow-lg bg-yellow-700 text-gray-700">
      <div className="flex justify-center pt-12  bg-white">
        <img
          className=" max-w-sm rounded-2xl "
          src={`/images/${image}`}
          alt={name}
        />
      </div>
      <div className="bg-white px-6 py-4">
        <div className="font-bold text-gray-700 text-xl mb-2">{name}</div>
      </div>
    </div>
  );
};

const PictureMenuB = () => {
  const items = [
    { id: 1, image: "item1.jpg", name: "New in Headwear", price: "29.99" },
    { id: 2, image: "item2.jpg", name: "Flat Peaks", price: "19.99" },
    { id: 3, image: "item3.jpg", name: "Pre-Curved Peaks", price: "39.99" },
    { id: 4, image: "item4.jpg", name: "Hats", price: "29.99" },
    {
      id: 5,
      image: "item5.jpg",
      name: "Multifunctional headwear",
      price: "19.99",
    },
    { id: 6, image: "item6.jpg", name: "Beanies", price: "39.99" },
    { id: 7, image: "item7.jpg", name: "Trucker Caps", price: "29.99" },
    { id: 8, image: "item8.jpg", name: "Bucket Hats", price: "19.99" },
  ];

  return (
    <>
      <div className="flex justify-center"></div>

      <div className=" my-8 bg-black">
        <ul className="py-12 bg-green-800">
          <h1 className="text-white text-4xl pl-8">Headwear Collection</h1>
          {items.map((item) => (
            <li className=" mx-10  bg-red-700">
              <a href="#new" className="text-gray-600 hover:text-gray-900">
                <Card2
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

const Card2 = ({ image, name, price }) => {
  return (
    <div className=" my-12  w-full  shadow-lg bg-yellow-700 text-gray-700">
      <div className="flex justify-center pt-12  bg-white">
        <img
          className=" max-w-sm rounded-2xl "
          src={`/images/${image}`}
          alt={name}
        />
      </div>
      <div className="bg-white px-6 py-4">
        <div className="font-bold text-gray-700 text-xl mb-2">{name}</div>
      </div>
    </div>
  );
};
