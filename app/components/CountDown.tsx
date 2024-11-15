"use client"; // Ensure this is a client component
import React, { useState, useEffect } from "react";
import "./CountDown.css"; // Import the corresponding CSS file

const CountDown = () => {
  // Set the target date and time in PKT (UTC+5)
  const targetDate = new Date("2024-11-10T00:00:00+05:00").getTime(); // Adjust to your target date and time

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    // Initialize timeLeft when the component mounts
    const now = new Date().getTime();
    const difference = targetDate - now;
    setTimeLeft(difference);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      setTimeLeft(difference);
    }, 1000);

    return () => clearInterval(timer); // Clean up timer on unmount
  }, [targetDate]);

  const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const h = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const m = Math.floor((timeLeft / 1000 / 60) % 60);
  const s = Math.floor((timeLeft / 1000) % 60);

  return (
    <span className="countdown">
      {d}:{h}:{m}:{s}
    </span>
  );
};

export default CountDown;
