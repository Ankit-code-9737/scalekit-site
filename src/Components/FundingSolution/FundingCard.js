import React from "react";
import "./FundingSolution.css";

export const FundingCard = ({ numText, titleText, paragText }) => {
  return (
    <>
      <div className="cardF">
        <div className="numberD">
          <h5>{numText}</h5>
        </div>
        <div className="textD">
          <h6>{titleText}</h6>
          <p>{paragText}</p>
        </div>
      </div>
    </>
  );
};
