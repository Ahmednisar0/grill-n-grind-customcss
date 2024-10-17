import React from "react";
import Menu from "./menu";
import Link from "next/link";
import CartIcon from "./carticon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 font-bold flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-2xl md:font-bold flex-1 md:text-center">
        <Link href="/">"GRILL 'n' GRIND"</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer h-8 bg-orange-300 px-1 rounded-md">
          <Image src="/images/phone.png" alt="" width={20} height={20} />
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href="/login" className="md:absolute top-3 r-2 lg:static flex items-center gap-2 h-8 cursor-pointer text-white bg-red-500 px-1 rounded-md">Login</Link>
        ) : (
          <Link href="/orders" className="md:absolute top-3 r-2 lg:static flex items-center gap-2 h-8 cursor-pointer text-white bg-red-500 px-1 rounded-md">Orders</Link>
        )}<div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer h-8 bg-red-500 text-white px-1 rounded-md">
        <CartIcon /></div>
      </div>
    </div>
  );
};

export default Navbar;