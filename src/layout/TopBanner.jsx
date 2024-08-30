import React from "react";
import bg from "@assets/abstract-1.svg";

const TopBanner = () => {
  return (
    <div id="top-banner">
      <p>✨Discover Your Dream Property with Estatein</p>
      <a href="#">
        <u>Learn More</u>
      </a>

      <div className="close-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M4.5 13.5L13.5 4.5M4.5 4.5L13.5 13.5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default TopBanner;
