import RecipeCardh from "./RecipeCardh";

export default function RecipeCardContainer() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 overflow-x-auto">

      {/* LEFT BIG CARD */}
      <div className="min-w-full sm:min-w-[320px] bg-gradient-to-r from-[#69C28F] to-[#43A36F] 
                      rounded-3xl p-6 shadow-lg text-white flex-shrink-0">
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs sm:text-sm bg-white/30 px-3 py-1 rounded-lg">
            {new Date().toLocaleDateString("en-US", {
              day: "2-digit",
              weekday: "short",
            })}
          </span>

          <button className="text-xs sm:text-sm bg-white/20 px-3 py-1 rounded-lg">
            Details
          </button>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold mb-4">Your Meal Today</h2>

        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm mb-4">
          <li>• Bread & Jam, Coffee</li>
          <li>• Salad</li>
          <li>• Fruit tarts, Chocolate mousse</li>
        </ul>

        <div className="flex gap-2 mt-4">
          <img src="https://i.pravatar.cc/40?img=1" className="h-6 w-6 sm:h-8 sm:w-8 rounded-full" />
          <img src="https://i.pravatar.cc/40?img=2" className="h-6 w-6 sm:h-8 sm:w-8 rounded-full" />
          <img src="https://i.pravatar.cc/40?img=3" className="h-6 w-6 sm:h-8 sm:w-8 rounded-full" />
        </div>

        <div className="flex gap-4 text-xs sm:text-sm mt-5">
          <span>⏱ 3h</span>
          <span>🔥 118kcal</span>
        </div>
      </div>

      {/* Recipe Cards */}
      <div className="flex gap-4 sm:gap-4 overflow-x-auto w-full sm:w-auto">
        <RecipeCardh
          title="Oats Upma"
          img="https://homecookingshow.in/wp-content/uploads/2025/06/Oats-Upma-500x500.webp"
          bg="bg-[#FBE8E8]"
          calories="220 kcal"
          time="20"
        />

        <RecipeCardh
          title="Quinoa Khichdi"
          img="https://www.cookwithmanali.com/wp-content/uploads/2019/02/Quinoa-Khichdi-Recipe.jpg"
          bg="bg-[#FDF3E8]"
          calories="320 kcal"
          time="30"
        />

        <RecipeCardh
          title="Cashew Nut Salad"
          img="https://i0.wp.com/fortheloveofgourmet.com/wp-content/uploads/2021/04/IMG_3871.jpg?resize=636%2C954&ssl=1"
          bg="bg-[#E8F7F3]"
          calories="250 kcal"
          time="15"
        />

        <RecipeCardh
          title="Sprout Salad"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qz7d5HLg0Tfk_LVf8UnU7n0dVPuNZY707g&s"
          bg="bg-[#FDF3E8]"
          calories="150 kcal"
          time="10"
        />
      </div>
    </div>
  );
}
