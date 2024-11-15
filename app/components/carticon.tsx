import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./carticon.css"; // Import the corresponding CSS file

const CartIcon = () => {
  return (
    <Link href="/cart" className="cart-icon"> {/* Add the CSS class */}
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/images/cart.png" alt="Cart" fill />
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;
