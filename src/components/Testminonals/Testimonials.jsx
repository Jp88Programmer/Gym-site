// TESTIMONIALS;
import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/teriminals";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const len = testimonialsData.length;
  console.log(testimonialsData);
  return (
    <div className="Testimonials">
      <div className="left-side">
        <span>Testimonials</span>
        <span className="stroke-text">what type</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span>{testimonialsData[selected].name}</span> -{" "}
          {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-side">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrow">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(len - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === len - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
