import React from "react";
import "./FinIndipends.css";

export const IndiCard = ({ Numer, Title, Text }) => {
  return (
    <>
      <div className="CardIndi">
        <div className="BorCir">
          <h5>{Numer}</h5>
        </div>
        <div className="Details">
          <h6>{Title}</h6>
          <p>{Text}</p>
        </div>
      </div>
    </>
  );
};
