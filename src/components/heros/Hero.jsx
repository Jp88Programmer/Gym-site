import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import HeartHealth from "../../assets/heartHealth.svg";
import HeroImg from "../../assets/hero_image.png";
import HeroImgBack from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import Programs from "../Programs/Programs";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="left-h">
        <Header />
        {/* this is the best fit to see the main animate part */}
        <div className="best-fit">
          <div></div>
          <span>best fitness club in the city and made by jayendra parmar</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              explicabo rem
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+130</span>
            <span>Expert Coach</span>
          </div>
          <div>
            <span>+967</span>
            <span>Member Joins</span>
          </div>
          <div>
            <span>+45</span>
            <span>Fitness Program</span>
          </div>
        </div>

        {/* fitness buttons */}
        <div className="hero-btn">
          <div className="btn">Get Started</div>
          <div className="btn">Learn More</div>
        </div>
      </div>
      <div className="right-h">
        <div className="btn">Join Now</div>
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero imges */}
        <img src={HeroImg} alt="" className="hero-img" />
        <img src={HeroImgBack} alt="" className="hero-back" />

        {/* calories */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
