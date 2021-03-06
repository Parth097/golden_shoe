import React from "react";
import "../../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/shoe_video.mp4" autoPlay loop muted />
      <h1>Golden Shoe</h1>
      <p>What's Your Perfect Fit?</p>

      <div class="btn-container">
        <button class="btn-video">NEW</button>
        <button class="btn-video">SALE</button>
      </div>
    </div>
  );
}

export default HeroSection;
