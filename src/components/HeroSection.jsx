import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>BOL'SHOY GAMBURGER</h1>
        <p className="subtitle">GO'VYADINA</p>
        <button className="price-btn">14 500</button>
      </div>
      <div className="hero-image">
        <img src="https://source.unsplash.com/400x300/?burger" alt="Burger" />
      </div>
    </div>
  );
};

export default HeroSection;
