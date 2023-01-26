import React from "react";
import "./Plans.css";
import dataOfPlan from "../../data/planData";
import whiteTick from "../../assets/whiteTick.png";
console.log(dataOfPlan);
const Plans = () => {
  return (
    <div className="Plans-container">
      <div className="Plans-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      {/* most importent how to take map here exmple */}
      <div className="Plans">
        {dataOfPlan.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>Rs.{plan.price}</span>

            <div className="features">
                {plan.features.map((feature,i)=>(
                    <div className="feature">
                        <img src={whiteTick} alt="" />
                        <span key={i}>{feature}</span>
                    </div>
                    
                ))}
            </div>
            
            <div><span>see more benefits-> </span></div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
