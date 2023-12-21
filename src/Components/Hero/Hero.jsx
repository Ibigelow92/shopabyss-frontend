import React from 'react'
import './Hero.css'
import hero_image from "../Assets/hero_image2.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <p>Introducing</p>        
          <p>our newest</p>
          <p>collections</p>
        </div>
        <div className="hero-latest-btn">
          <div>Shop Now</div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" className="hero-img"/>
      </div>
    </div>
  )
}

export default Hero