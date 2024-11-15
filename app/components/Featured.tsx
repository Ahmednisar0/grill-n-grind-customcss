import { featuredProducts } from "./data";
import Image from "next/image";
import React from "react";
import './Featured.css'; // Import the CSS file

const Featured = () => {
  return (
    <div className="featured-wrapper">
      {/* WRAPPER */}
      <div className="featured-products">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div key={item.id} className="featured-item">
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="featured-img-container">
                <Image src={item.img} alt={item.title} layout="fill" className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="featured-text">
              <h1 className="featured-title">{item.title}</h1>
              <p className="featured-description">{item.desc}</p>
              <span className="featured-price">${item.price}</span>
              <button className="featured-button">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
