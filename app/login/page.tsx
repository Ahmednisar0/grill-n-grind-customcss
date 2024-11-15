import Image from "next/image";
import Link from "next/link";
import React from "react";
import './login.css'; // Import the CSS file

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* BOX */}
      <div className="login-box">
        {/* IMAGE CONTAINER */}
        <div className="login-image">
          <Image
            src="/images/loginBg.png"
            alt="Login Background"
            fill
            className="object-cover rounded-t-md md:rounded-l-md"
            priority // Loads image faster
          />
        </div>
        {/* FORM CONTAINER */}
        <div className="login-form-container">
          <h1 className="login-form-title">Welcome</h1>
          <p className="login-form-text">
            Log into your account or create a new one using social buttons
          </p>
          <button className="login-button">
            <Image
              src="/images/google.png"
              alt="Google"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="login-button">
            <Image
              src="/images/facebook.png"
              alt="Facebook"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="login-footer-text">
            Have a problem? <Link className="login-footer-link" href="/"> Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
