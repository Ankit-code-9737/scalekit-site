import React from "react";
import "./HitWork.css";
import { Container, MainSubTitle, MainTitle } from "../../Style";
import { HitCard } from "./HitCard";

import OneSvg from "../../images/compoSvg/Hiw-one.svg";
import TSvg from "../../images/compoSvg/Hiw-two.svg";
import ThSvg from "../../images/compoSvg/Hiw-three.svg";
import FSvg from "../../images/compoSvg/Hiw-four.svg";
import FiSvg from "../../images/compoSvg/Hiw-five.svg";

const HitWork = () => {
  return (
    <div className="HowItWork pt-60 pb-60">
      <Container>
        <MainTitle data-aos="fade-up" data-aos-duration="3000">
          How <span>It </span>Works
        </MainTitle>
        <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
          Decoding Financial Processes: Understanding How It Works.
        </MainSubTitle>
        <div className="CardWrp" data-aos="fade-up" data-aos-duration="3000">
          <HitCard
            ImgSrc={OneSvg}
            Htitle="Benefits"
            Htext="Understanding consumer behaviour and preferences is crucial when crafting an."
          />
          <HitCard
            ImgSrc={TSvg}
            Htitle="Consumer"
            Htext="Understanding consumer behaviour and preferences is crucial when crafting an."
          />
          <HitCard
            ImgSrc={ThSvg}
            Htitle="Marketing"
            Htext="Effectively marketing your Unique Selling Proposition (USP) is essential to showcase"
          />
          <HitCard
            ImgSrc={FSvg}
            Htitle="Target Audience"
            Htext="Understanding consumer behaviour and preferences is crucial when crafting an."
          />
          <HitCard
            ImgSrc={FiSvg}
            Htitle="Sale"
            Htext="Your Unique Selling Proposition (USP) is a powerful tool to boost sales by highlighting."
          />
        </div>
      </Container>
    </div>
  );
};

export default HitWork;
