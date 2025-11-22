import React from 'react';
import { NavLink } from 'react-router-dom';
import mixing from '../assets/mixing.png';
import salad from '../assets/salad.png';

function HomeRecepi() {
  return (
    <>
      <div className="w-full bg-white py-16 relative overflow-hidden">

        {/* Background doodles */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src={mixing} className="absolute top-8 left-10 w-24" />
          <img src={salad} className="absolute bottom-10 right-10 w-32" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

          {/* ---------- LEFT SECTION ---------- */}
          <div className="flex flex-col justify-center">

            <h1 className="text-5xl font-bold text-green leading-tight">
              Your Personal <br /> Nutritionist
            </h1>

            <h3 className="text-gray-700 font-semibold mt-4">
              Nutrition For a Healthy Body...
            </h3>

            {/* Bullet List */}
            <ul className="mt-4 space-y-3 text-gray-600 text-lg">
              <li className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span>
                Discover a collection of healthy and tasty recipes tailored for your diet!  
              </li>

              <li className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span>
                Enjoy nutrient-rich, delicious meals that make eating well easy and satisfying.
              </li>

              <li className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span>
                Perfect for any dietary goals!
              </li>


              <li className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span>
                Everything your body needs, nothing it doesn’t.
              </li>
            </ul>

            {/* Button */}
            <NavLink to="/recipes">
              <button className="mt-6 bg-green text-white px-8 py-3 rounded-full shadow hover:bg-green-700 transition">
                Get Start
              </button>
            </NavLink>
          </div>

          {/* ---------- RIGHT SECTION ---------- */}
          <div className="flex justify-center items-center relative bg-white/70">
            <img
              src="https://cdn.shopify.com/s/files/1/0005/5335/3267/files/Slide_1_2_cfb65786-a9db-4ce8-8f3a-691c5f0346e8_480x480.jpg?v=1652760401"
              alt="Recipe Bowl"
              className="w-[380px] h-[380px] object-cover rounded-full shadow-xl"
            />

            {/* Nutrition Cards */}
            <div className="absolute bottom-6 left-4 bg-white/70 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg text-center">
  <h4 className="text-gray-600 text-sm">Calories</h4>
  <p className="text-3xl font-bold text-green">250</p>
  <span className="text-gray-500 text-sm">Kcal</span>
</div>

<div className="absolute bottom-6 right-4 bg-white/70 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg text-center">
  <h4 className="text-gray-600 text-sm">Protein</h4>
  <p className="text-3xl font-bold text-green">24</p>
  <span className="text-gray-500 text-sm">Gram</span>
</div>

<div className="absolute bottom-6 -translate-y-1/2 bg-white/70 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg text-center">
  <h4 className="text-gray-600 text-sm">Fat</h4>
  <p className="text-3xl font-bold text-green">14</p>
  <span className="text-gray-500 text-sm">Gram</span>
</div>

          </div>

        </div>
      </div>
    </>
  );
}

export default HomeRecepi;
