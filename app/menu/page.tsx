import { menu } from "../components/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 pt-24 md:pt-32 flex flex-col items-center justify-center">
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {menu.map((category) => (
          <Link
            href={`/menu/${category.slug}`}
            key={category.id}
            className="relative w-full h-64 md:h-80 lg:h-80 bg-cover bg-center flex items-center justify-center overflow-hidden rounded-md shadow-lg transition-transform duration-300 transform hover:scale-105"
            style={{ backgroundImage: `url(${category.img})` }}
          >
            {/* Text and Button Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
              <h1 className={`uppercase font-bold text-lg md:text-3xl text-${category.color}`}>
                {category.title}
              </h1>
              <p className="text-sm md:text-sm my-2 text-white">{category.desc}</p>
            </div>

            {/* Centered Button */}
            <button
              className="absolute bottom-4 bg-white text-red-500 py-2 px-4 rounded-md font-bold hover:bg-red-500 hover:text-white transition duration-300"
            >
              See Flavour
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
