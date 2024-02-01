import React from "react";
import { Container, MainSubTitle, MainTitle } from "../Style";
import VMSAbout from "../Components/VMSAbout/VMSAbout";
import SuStory from "../Components/sStory/SuStory";
import WhyChoiseUs from "../Components/WhyChoise/WhyChoUs";
import SupportFinancial from "../Components/SupportFinancial/SupportFinancial";
import FinIndipends from "../Components/FinancialIndepends/FinIndipends";

import WhatDoImg from "../images/WwdImg.png";
import DoTogether from "../Components/DoTogether/DoTogether";

const About = () => {
  return (
    <>
      <div className="AboutHero pt-120 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            Hello, there we are <br /> <span>Scalekit</span>
          </MainTitle>
          <h6
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="3000"
            style={{
              fontFamily: "ClashDisplay-Medium",
              fontSize: "20px",
              marginBottom: "16px",
            }}
          >
            Let’s spend some time together getting to know one another.
          </h6>
          <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
            Facilitating your realisation of your aspirations. Improve your
            financial outlook with access to tailored finance choices and
            specialised creditrepair services.
          </MainSubTitle>
        </Container>
      </div>
      <VMSAbout />
      <SuStory />
      <WhyChoiseUs />
      <SupportFinancial />
      <FinIndipends />
      <div
        className="WhatWDo pt-60 pb-60"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Container>
          <img className="w-100" src={WhatDoImg} alt="" />
        </Container>
      </div>
      <DoTogether />
    </>
  );
};

export default About;
