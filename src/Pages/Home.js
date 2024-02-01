import React from "react";
import Hero from "../Components/Hero/Hero";
import FundingSolution from "../Components/FundingSolution/FundingSolution";
import WhyChoise from "../Components/WhyChoise/WhyChoise";
import ThFree from "../Components/THFree/ThFree";
// import ECreaditRe from "../Components/WhyChoise/ECreditRe";
import SatisfiedClients from "../Components/SatisfiedClients/SatisfiedClients";

const Home = () => {
  return (
    <>
      <Hero />
      <FundingSolution />
      <WhyChoise />
      <ThFree />
      {/* <ECreaditRe /> */}
      <SatisfiedClients />
    </>
  );
};

export default Home;
