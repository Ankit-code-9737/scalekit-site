import React from "react";
import "./SuStory.css";

export const SuStoryCard = ({ CardLab, CardP, CardText }) => {
  return (
    <>
      <div className="CardSu">
        <div className="CardLable">
          <h5>{CardLab}</h5>
        </div>
        <p>{CardP}</p>
        <h6 className="text-center">{CardText}</h6>
      </div>
    </>
  );
};
