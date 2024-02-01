import React from "react";
import "./VMSAbout.css";

export const VmsCard = ({ VTitle, VText }) => {
  return (
    <>
      <div className="VmsCard">
        <div className="row">
          <div className="col-lg-4">
            <h6>{VTitle}</h6>
          </div>
          <div className="col-lg-8">
            <p>{VText}</p>
          </div>
        </div>
      </div>
    </>
  );
};
