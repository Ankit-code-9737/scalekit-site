import React from "react";
import "./HitWork.css";

export const HitCard = ({ ImgSrc, Htitle, Htext }) => {
  return (
    <>
      <div className="CardHit">
        <div className="Icondiv">
          <img src={ImgSrc} alt="" />
        </div>
        <h6>{Htitle}</h6>
        <p>{Htext}</p>
      </div>
    </>
  );
};
