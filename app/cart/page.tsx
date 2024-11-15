import Image from "next/image";
import React from "react";
import './cart.css'; // Import the CSS file

const CartPage = () => {
  return (
    <div className="cart-container">
      {/* PRODUCTS CONTAINER */}
      <div className="cart-products-container">
        {/* SINGLE ITEM */}
        <div className="cart-product-item">
          <Image src="/images/p1.png" alt="" width={100} height={100} />
          <div className="cart-product-info">
            <h1 className="cart-product-title">sicilian</h1>
            <span className="cart-product-size">Large</span>
          </div>
          <h2 className="cart-product-price">$79.90</h2>
          <span className="cart-product-remove">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="cart-product-item">
          <Image src="/images/p1.png" alt="" width={100} height={100} />
          <div className="cart-product-info">
            <h1 className="cart-product-title">sicilian</h1>
            <span className="cart-product-size">Large</span>
          </div>
          <h2 className="cart-product-price">$79.90</h2>
          <span className="cart-product-remove">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="cart-product-item">
          <Image src="/images/p1.png" alt="" width={100} height={100} />
          <div className="cart-product-info">
            <h1 className="cart-product-title">sicilian</h1>
            <span className="cart-product-size">Large</span>
          </div>
          <h2 className="cart-product-price">$79.90</h2>
          <span className="cart-product-remove">X</span>
        </div>
      </div>

      {/* PAYMENT CONTAINER */}
      <div className="cart-payment-container">
        <div className="cart-payment-info">
          <span>Subtotal (3 items)</span>
          <span>$81.70</span>
        </div>
        <div className="cart-payment-info">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="cart-payment-info">
          <span>Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr />
        <div className="cart-payment-info">
          <span>TOTAL (INCL. VAT)</span>
          <span className="cart-payment-total">$81.70</span>
        </div>
        <button className="cart-checkout-button">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
