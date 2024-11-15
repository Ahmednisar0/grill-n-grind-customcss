"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import './slider.css'; // Import the CSS file

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/images/slide1.jpg",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/images/slide2.jpg",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/images/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {/* TEXT CONTAINER */}
      <div className="slider-text-container">
        <h1 className="slider-title">{data[currentSlide].title}</h1>
        <button className="slider-button">Order Now</button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="slider-image-container">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="slider-image"
        />
      </div>
    </div>
  );
};

export default Slider;
