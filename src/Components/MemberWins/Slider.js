import React from "react";
import "./WinsSlider.css";

import SliderOne from "../../images/SliderOne.png";
import Logo from "../../images/scalekit-main.svg";

export const SliderM = () => {
  return (
    <>
      <div className="MemberSli">
        <div className="ImgD">
          <img className="w-100" src={SliderOne} alt="" />
        </div>
        <div className="Details">
          <img src={Logo} alt="" />
          <h6>Member Wins</h6>
        </div>
      </div>
    </>
  );
};
