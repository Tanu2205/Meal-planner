import { NavLink } from "react-router-dom";

export default function RecipeCardh({ title, img, bg, calories,time }) {
  return (
    <div className={`min-w-[220px] ${bg} rounded-3xl p-4 shadow-lg`}>
      <h3 className="font-semibold mb-3">{title}</h3>

      <img
        src={img}
        className="w-full h-32 object-cover rounded-xl mb-3"
        alt={title}
      />
      <NavLink to="/recipes">
      <button className="w-full bg-teal-500 text-white py-2 rounded-lg text-sm">
        See recipe
      </button></NavLink>
      

      <div className="flex items-center justify-between mt-3 text-xs text-gray-600">
        <span>⏱ 6m</span>
        <span>🔥 {calories}</span>
      </div>
    </div>
  );
}
