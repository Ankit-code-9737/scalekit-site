import React from "react";
import "./ThFree.css";

export const ThFreeCard = ({ ImgSrc, CardTitle, CardText }) => {
  return (
    <>
      <div className="CardT">
        <div className="CardtIcon">
          <img src={ImgSrc} alt="" />
        </div>
        <h6>{CardTitle}</h6>
        <p>{CardText}</p>
      </div>
    </>
  );
};
