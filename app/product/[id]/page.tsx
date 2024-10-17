"use client"
import Price from "@/app/components/Price";
import { singleProduct } from "@/app/components/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SingleProductPage = () => {
  const [product, setProduct] = useState(singleProduct); // Assuming singleProduct is initial state

  useEffect(() => {
    // If fetching data, handle loading state here
    // Example: fetch product data and set it
  }, []);

  // Check if product data is loaded
  if (!product) {
    return <div>Loading...</div>; // Simple loading message
  }

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {product.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={product.img}
            alt={product.title} // Added descriptive alt text
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{product.title}</h1>
        <p>{product.desc || "Description not available."}</p>
        <Price price={product.price} id={product.id} options={product.options} />
      </div>
    </div>
  );
};

export default SingleProductPage;
