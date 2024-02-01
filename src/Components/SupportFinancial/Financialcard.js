import React from "react";
import "./SupportFinancial.css";
import { MainTitle } from "../../Style";

export const Financialcard = ({ PtgText, parText }) => {
  return (
    <>
      <div className="CardSuFi">
        <MainTitle>
          <span>{PtgText}</span>
        </MainTitle>
        <h5 className="text-center">{parText}</h5>
      </div>
    </>
  );
};
