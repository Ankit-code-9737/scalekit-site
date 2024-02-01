import React from "react";
import CreRepair from "../Components/BusFunding/CreRepair";
import OurProcess from "../Components/OurProcess/OurProcess";
import ReqFinancing from "../Components/ReqFinancing/ReqFinancing";
import AggApproach from "../Components/AggApproach/AggApproach";
import CrFAQ from "../Components/FAQ/CrFAQ";

const CreateRepair = () => {
  return (
    <>
      <CreRepair />
      <OurProcess />
      <ReqFinancing
        ReqFTitle="Have  No Credit?"
        ReqFP='No problem! Click "Apply Now" to Buy Our "Xredit Starter Consultation" and Get a Credit Score in 60 Days!'
      />
      <AggApproach />
      <CrFAQ />
    </>
  );
};

export default CreateRepair;
