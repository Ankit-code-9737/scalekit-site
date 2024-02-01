import React from "react";
import "./WhyChoise.css";

export const WhyChoiseCard = ({ CardSvg, CardTitle, CardText }) => {
  return (
    <>
      <div className="cardC">
        <div className="IconD">
          <img src={CardSvg} alt="" />
        </div>
        <h6>{CardTitle}</h6>
        <p>{CardText}</p>
      </div>
    </>
  );
};
