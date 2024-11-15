import { pizzas } from "@/app/components/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import './category.css'; // Import the external CSS

const CategoryPage = () => {
  return (
    <div className="category-container">
      {pizzas.map((item) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className="category-item"
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="category-image">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="category-text">
            <h1 className="category-title">{item.title}</h1>
            <h2 className="category-price">${item.price}</h2>
            <button className="category-add-to-cart">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
