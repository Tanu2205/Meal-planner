import React, { useState } from "react";
import items from "../components/CartItems";
import ShoppingCard from "../components/ShoppingCard";
import { Link } from "react-router-dom";

const categories = ["Vegetables", "Fruits", "Dairy", "Grocery", "Bakery"];

const ShoppingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Vegetables");

  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="bg-gray-100 min-h-screen ">

      <div className="flex justify-between px-6">
        <h1 className="text-3xl font-bold mb-8">Food & Grains Store</h1>

        {/* View Cart Button */}
        <Link to="/cart">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
            View Cart
          </button>
        </Link>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-blue text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <ShoppingCard key={item.id} item={item} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No items available in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default ShoppingPage;
