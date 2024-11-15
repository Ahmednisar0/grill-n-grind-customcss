import Link from "next/link";
import React from "react";
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer">
      <Link href="/" className="footer-link">GRILL 'n' GRIND</Link>
      <p className="footer-text">© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
