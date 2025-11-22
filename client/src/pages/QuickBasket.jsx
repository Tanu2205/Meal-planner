import React, { useState } from "react";
import items from "../components/CartItems";
import ShoppingCard from "../components/ShoppingCard";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import {
  faAppleWhole,
  faCarrot,
  faCheese,
  faBreadSlice,
  faLeaf,
  faCartShopping,
  faBars,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconMap = {
  Vegetables: faCarrot,
  Fruits: faAppleWhole,
  Dairy: faCheese,
  Grocery: faLeaf,
  Bakery: faBreadSlice,
};

const categories = ["Vegetables", "Fruits", "Dairy", "Grocery", "Bakery"];

const QuickBasket = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ⭐ mobile sidebar toggle

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    const el = document.getElementById(cat);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsSidebarOpen(false); // close sidebar on mobile when selecting
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* LEFT NAVBAR (unchanged) */}
      <div className="fixed top-0 left-0 h-full bg-white shadow-lg z-50  md:block">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 ml-24 md:ml-24 md:mr-64 px-4 md:px-6 py-6 overflow-auto relative">

        {/* ⭐ Mobile Hamburger Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed top-24 right-4 z-50 p-2 bg-white shadow rounded-lg"
        >
          <FontAwesomeIcon icon={faBars} className="text-xl text-gray-700" />
        </button>

        <TopBar />
        <h1 className="text-3xl md:text-4xl font-bold py-4 text-center text-green font-[Poppins]">
          Quick Basket
        </h1>

        {categories.map((cat) => (
          <section key={cat} id={cat} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{cat}</h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {items
                .filter((item) => item.category === cat)
                .map((item) => (
                  <ShoppingCard key={item.id} item={item} />
                ))}
            </div>
          </section>
        ))}
      </div>

      {/* ⭐ RIGHT SIDEBAR - Desktop (always visible) */}
      <div className="hidden md:flex fixed top-0 right-0 h-screen w-64 bg-white shadow-sm border-l border-gray-200 p-5 z-40 flex-col rounded-xl">
        {/* desktop content */}
        <SidebarContent
          categories={categories}
          iconMap={iconMap}
          handleCategoryClick={handleCategoryClick}
        />
      </div>

      {/* ⭐ RIGHT SIDEBAR - Mobile Slide-in */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl p-5 z-50 transform transition-transform duration-300 md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* close button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-4 left-4 text-gray-700"
        >
          <FontAwesomeIcon icon={faXmark} className="text-2xl" />
        </button>

        {/* mobile sidebar contents */}
        <SidebarContent
          categories={categories}
          iconMap={iconMap}
          handleCategoryClick={handleCategoryClick}
        />
      </div>

    </div>
  );
};

export default QuickBasket;


// ⭐ Reusable Sidebar content component
const SidebarContent = ({ categories, iconMap, handleCategoryClick }) => (
  <>
    <h3 className="text-lg font-semibold mb-4 text-gray-800 mt-12 md:mt-0">Category</h3>

    <ul className="space-y-4 flex-1 overflow-y-auto">
      {categories.map((cat) => {
        const icon = iconMap[cat] || faLeaf;
        return (
          <li key={cat}>
            <button
              onClick={() => handleCategoryClick(cat)}
              className="w-full flex items-center gap-3 text-gray-700 hover:text-green-700 px-2 py-2 rounded transition "
            >
              <FontAwesomeIcon icon={icon} className="text-lg text-green opacity-80" />
              <span className="text-sm font-medium">{cat}</span>
            </button>
          </li>
        );
      })}

      <hr className="my-4 border-gray-300" />

      <li className="text-gray-700 hover:text-green-700 cursor-pointer text-sm">Value of the Day</li>
      <li className="text-gray-700 hover:text-green-700 cursor-pointer text-sm">Top 20 Offers</li>
      <li className="text-gray-700 hover:text-green-700 cursor-pointer text-sm">New Arrivals</li>
    </ul>

    <Link to="/cart">
      <button className="w-full flex items-center justify-center gap-2 bg-green text-white py-3 rounded-lg shadow hover:bg-green-700 transition">
        <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
        <span className="font-medium">View Cart</span>
      </button>
    </Link>
  </>
);
