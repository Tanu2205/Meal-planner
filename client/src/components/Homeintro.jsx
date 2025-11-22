import React from 'react';
import illustration from '../assets/illustration (2).png';
import RecipeCardContainer from "./RecipeCardContainer";
import FeaturedCategories from './FeaturedCategories';
import TopBar from "./TopBar";

function Homeintro() {
  return (
    <>
      <div
        className="
          flex-1 bg-[#ffffff] min-h-screen 
          px-4 md:px-6 py-4 
          pb-28 md:pb-6     /* ← Prevent bottom navbar overlap */
        "
      >

        {/* ================= TOP BAR ================= */}
        <TopBar />

        {/* =================== HERO SECTION =================== */}
        <div className="mt-4 flex justify-center">
          <div className="rounded-3xl p-1 shadow-lg w-full max-w-6xl">

            <div
              className="
                grid grid-cols-1 md:grid-cols-2 
                bg-gradient-to-r from-[#018965] to-[#41c3a1] 
                rounded-3xl 
                p-6 md:p-10 
                gap-8
              "
            >

              {/* LEFT TEXT */}
              <div className="flex flex-col justify-center gap-4 md:gap-6 text-center md:text-left">

                <p className="bg-white text-[#2E6F52] text-xs md:text-sm font-semibold rounded-full px-4 py-1 w-fit mx-auto md:mx-0">
                  A Customised Meal Planner
                </p>

                <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug md:leading-tight">
                  Test the Joy of Healthy Eating
                </h1>

                <p className="text-sm md:text-lg text-white leading-relaxed">
                  Your ultimate meal planner for easy, customized meal planning.
                  Build balanced meal plans, track nutrition, create shopping lists — all in one place.
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center items-center">
                <img
                  src={illustration}
                  alt="Meal planner illustration"
                  className="h-44 md:h-[40vh] w-auto object-contain"
                />
              </div>

            </div>
          </div>
        </div>

        {/* =================== SECTIONS =================== */}
        <div className="min-h-screen p-4 md:p-6">

          <div className="w-full">
            <RecipeCardContainer />
          </div>

          <div className="w-full mt-8">
            <FeaturedCategories />
          </div>

        </div>

      </div>
    </>
  );
}

export default Homeintro;
