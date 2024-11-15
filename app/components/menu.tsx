"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./carticon";
import './menu.css'; // Import the CSS file

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const user = false;

  return (
    <div>
      {/* Menu button to toggle open/close */}
      <Image
        src={open ? "/images/close.png" : "/images/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="menu-button"
      />

      {open && (
        <div className="menu-dropdown">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)} className="menu-link">
              {item.title}
            </Link>
          ))}

          <Link href={user ? "/orders" : "login"} onClick={() => setOpen(false)} className="menu-link">
            {user ? "Orders" : "Login"}
          </Link>

          <Link href="/cart" onClick={() => setOpen(false)} className="menu-link">
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
