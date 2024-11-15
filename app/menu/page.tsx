import { menu } from "../components/data";
import Link from "next/link";
import React from "react";
import './menu.css'; // Import the CSS file

const MenuPage = () => {
  return (
    <div className="menu-container">
      {/* Responsive grid layout */}
      <div className="menu-grid">
        {menu.map((category) => (
          <Link
            href={`/menu/${category.slug}`}
            key={category.id}
            className="menu-link"
            style={{ backgroundImage: `url(${category.img})` }}
          >
            {/* Text and Button Overlay */}
            <div className="menu-overlay">
              <h1 className={`text-${category.color}`}>{category.title}</h1>
              <p>{category.desc}</p>
            </div>

            {/* Centered Button */}
            <button className="menu-button">
              See Flavour
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
