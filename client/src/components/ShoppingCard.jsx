import React from "react";
import { useCart } from "./CartContext";

const ShoppingCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 relative">
      
      {/* Category Label */}
      <p className="text-sm text-gray-500 mb-2">{item.category}</p>

      {/* Image */}
      <div className="w-full bg-white flex justify-center rounded-lg">
        <img
          src={item.image}
          alt={item.name}
          className="h-36 object-contain"
        />
      </div>

      {/* Name */}
      <h2 className="text-lg font-semibold mt-3 text-gray-800 line-clamp-2">
        {item.name}
      </h2>

      {/* Price + Discount + Rating */}
      <div className="mt-2">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">₹{item.price}</span>
          <span className="text-red-500 text-sm bg-red-100 px-2 py-0.5 rounded-full">
            -{item.discount}%
          </span>
        </div>

        {/* Stars */}
        <div className="flex items-center text-yellow-500 mt-1 text-sm">
          ★★★★★
          <span className="text-gray-600 ml-1">({item.rating})</span>
        </div>
      </div>

      {/* Add Button (Plus style) */}
      <button
        onClick={() => addToCart(item)}
        className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-md"
      >
        +
      </button>
    </div>
  );
};

export default ShoppingCard;
