import React from "react";
import BusFunding from "../Components/BusFunding/BusFunding";
import HitWork from "../Components/HitWork/HitWork";
import ReqFinancing from "../Components/ReqFinancing/ReqFinancing";
import SatisfiedClients from "../Components/SatisfiedClients/SatisfiedClients";
import FAQ from "../Components/FAQ/FAQ";

const BusinessFunding = () => {
  return (
    <>
      <BusFunding />
      <HitWork />
      <ReqFinancing ReqFTitle="If you meet these requirements, you may qualify for financing!" />
      <SatisfiedClients />
      <FAQ />
    </>
  );
};

export default BusinessFunding;
