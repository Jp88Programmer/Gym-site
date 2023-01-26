import "./Join.css";

import React from "react";

const Join = () => {
  return (
    <div id="join-us" className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>

        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US ?</span>
        </div>
      </div>

      <div className="right-j">
        <form action="" className="email-detail">
            <input type="email" name="email" id="email" placeholder="Enter Your Email" />
            <button className="btn btn-j">Join Us</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
