import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ data, className = "w-full h-[330px]" }) {
  return (
    <Link
      to={`/recipe/${data.id}`}
      className={`relative bg-gray-800 flex items-end justify-start 
                 p-6 overflow-hidden rounded-2xl shadow-lg ${className} `}
    >
      <img
        className="absolute w-full h-full inset-0 object-cover 
                   opacity-50 hover:opacity-70 duration-500 hover:scale-110"
        src={data.image}
        alt={data.title}
      />
      <div className="relative z-10">
        <p className="font-bold text-lg text-white">{data.title}</p>
      </div>
    </Link>
  );
}

export default RecipeCard;
