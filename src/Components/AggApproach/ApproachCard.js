import React from "react";

export const ApproachCard = ({ AppSrc, AppText }) => {
  return (
    <>
      <div className="CardApp">
        <img src={AppSrc} alt="" />
        <h6>{AppText}</h6>
      </div>
    </>
  );
};
