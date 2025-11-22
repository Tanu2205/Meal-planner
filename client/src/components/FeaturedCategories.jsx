import React from "react";
import { NavLink } from "react-router-dom";

const categories = [
  {
    name: "Vegetables",
    img: "https://media.istockphoto.com/id/1350415418/photo/assortment-of-raw-winter-vegetables.webp?s=1024x1024&w=is&k=20&c=LXR8Ym9PWnzDAHVotmHEoNcTMxYbofEkKUOt-wcyHzg=",
  },
  {
    name: "Dairy",
    img: "https://media.istockphoto.com/id/479121800/photo/fresh-dairy-products.webp?s=1024x1024&w=is&k=20&c=TvW35GGgrD91LqD3PER1TqPlLTojf-1jwA56VWMw7xA=",
  },
  {
    name: "Fruits",
    img: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
  },
  {
    name: "Grocery",
    img: "https://media.istockphoto.com/id/160356179/photo/side-view-of-shopping-cart-filled-with-groceries-and-vegetables.jpg?s=1024x1024&w=is&k=20&c=psEy0-A2HdozAp-qWE4VBKOIyQkQQfvISCMpd7eX_Uo=",
  },
  {
    name: "Bakery",
    img: "https://images.pexels.com/photos/2147834/pexels-photo-2147834.jpeg",
  },
];

export default function FeaturedCategories() {
  return (
    <div className="w-full px-4 md:px-16 py-10 pb-24 md:pb-10">
      {/* Heading Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 sm:gap-0">
        <h2 className="text-2xl sm:text-3xl font-semibold">Featured Categories</h2>
        <NavLink to="/quickbasket">
          <button className="text-green-600 hover:underline text-sm sm:text-base">
            View All Category
          </button>
        </NavLink>
      </div>

      {/* Category Icons */}
      <NavLink to="/quickbasket">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-10">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-lgreen shadow-md rounded-xl p-3 sm:p-4 hover:scale-105 duration-300"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full mb-2"
              />
              <p className="font-medium text-sm sm:text-base">{cat.name}</p>
            </div>
          ))}
        </div>
      </NavLink>

      {/* Promo Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="bg-[#f1f5e0] rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between shadow-md gap-4 md:gap-0">
          <div className="text-center md:text-left">
            <p className="bg-white px-3 py-1 rounded-full w-fit text-xs sm:text-sm font-medium">
              Flat 20% Discount
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold mt-3 leading-snug">
              Purely Fresh <br /> Vegetables
            </h3>
            <NavLink to="/quickbasket">
              <button className="mt-4 sm:mt-5 bg-green text-white px-4 sm:px-5 py-2 rounded-full hover:bg-green-700">
                Shop Now →
              </button>
            </NavLink>
          </div>

          <img
            src="https://media.istockphoto.com/id/1350415418/photo/assortment-of-raw-winter-vegetables.webp?s=1024x1024&w=is&k=20&c=LXR8Ym9PWnzDAHVotmHEoNcTMxYbofEkKUOt-wcyHzg="
            className="h-32 sm:h-40 md:h-40 rounded-3xl object-contain"
          />
        </div>

        {/* Right Card */}
        <div className="bg-[#e7f7e6] rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between shadow-md gap-4 md:gap-0">
          <div className="text-center md:text-left">
            <p className="bg-white px-3 py-1 rounded-full w-fit text-xs sm:text-sm font-medium">
              Flat 25% Discount
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold mt-3 leading-snug">
              Fresh Fruits, <br /> Pure Quality
            </h3>
            <NavLink to="/quickbasket">
              <button className="mt-4 sm:mt-5 bg-green text-white px-4 sm:px-5 py-2 rounded-full hover:bg-green-700">
                Shop Now →
              </button>
            </NavLink>
          </div>

          <img
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-32 sm:h-40 md:h-40 rounded-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
}
