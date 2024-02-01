import React from "react";
import "./OurProcess.css";

export const ProcessCard = ({ ImgSrc, CardTitle, CardText }) => {
  return (
    <>
      <div className="CardPro">
        <div className="IconText">
          <img src={ImgSrc} alt=""></img>
          <h5>{CardTitle}</h5>
        </div>
        <p>{CardText}</p>
      </div>
    </>
  );
};
