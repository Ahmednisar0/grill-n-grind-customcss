"use client";

import React, { useEffect, useState } from "react";
import './Price.css'; // Import the CSS file

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="price-container">
      <h2 className="price-title">${total.toFixed(2)}</h2>
      
      {/* OPTIONS CONTAINER */}
      <div className="options-container">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className={`option-button ${selected === index ? 'option-button-selected' : ''}`}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="quantity-container">
        {/* QUANTITY */}
        <div className="quantity-controls">
          <span>Quantity</span>
          <button
            className="quantity-button"
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            {"<"}
          </button>
          <span>{quantity}</span>
          <button
            className="quantity-button"
            onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
          >
            {">"}
          </button>
        </div>

        {/* CART BUTTON */}
        <button className="cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
