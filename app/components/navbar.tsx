import React from "react";
import Menu from "./menu";
import Link from "next/link";
import CartIcon from "./carticon";
import Image from "next/image";
import './navbar.css'; // Import the CSS file

const Navbar = () => {
  const user = false;
  return (
    <div className="navbar navbar-desktop">
      {/* LEFT LINKS */}
      <div className="navbar-links hidden md:flex">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* LOGO */}
      <div className="navbar-logo">
        <Link href="/">"GRILL 'n' GRIND"</Link>
      </div>

      {/* MOBILE MENU */}
      <div className="navbar-mobile-menu md:hidden">
        <Menu />
      </div>

      {/* RIGHT LINKS */}
      <div className="navbar-right-links hidden md:flex">
        <div className="navbar-phone">
          <Image src="/images/phone.png" alt="" width={20} height={20} />
          <span>123 456 78</span>
        </div>

        {!user ? (
          <Link href="/login" className="navbar-login">
            Login
          </Link>
        ) : (
          <Link href="/orders" className="navbar-orders">
            Orders
          </Link>
        )}

        <div className="navbar-cart">
          <CartIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
