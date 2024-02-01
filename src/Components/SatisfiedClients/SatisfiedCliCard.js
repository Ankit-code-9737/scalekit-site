import React from "react";
import "./SatisfiedClients.css";
import FiveStar from "../../images/Clients/ClientsStarsFive.png";

export const SatisfiedCliCard = ({ FirstText, CardTitle, CardText }) => {
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <div className="CardSa">
          <span className="Profile-text">
            <h5>{FirstText}</h5>
          </span>
          <h6>{CardTitle}</h6>
          <p>{CardText}</p>
          <img className="Star" src={FiveStar} alt="" />
        </div>
      </div>
    </>
  );
};
