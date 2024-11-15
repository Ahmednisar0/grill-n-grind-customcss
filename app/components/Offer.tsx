import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";
import './Offer.css'; // Import the CSS file

const Offer = () => {
  return (
    <div className="offer-container offer-container-md">
      {/* TEXT CONTAINER */}
      <div className="offer-text-container">
        <h1 className="offer-title offer-title-xl">Delicious Burger & French Fry</h1>
        <p className="offer-description">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className="offer-button">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="offer-image-container">
        <Image src="/images/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
