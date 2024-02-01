import React from "react";
import "./WhyChoise.css";
import { Container, MainTitle, MainSubTitle } from "../../Style";
import { WhyChoiseCard } from "./WhyChoiseCard";

import svgOne from "../../images/compoSvg/chooseOne.svg";
import svgTwo from "../../images/compoSvg/chooseTwo.svg";
import svgThree from "../../images/compoSvg/chooseThree.svg";

const WhyChoise = () => {
  return (
    <>
      <div className="WhyChoise pt-60 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            Why <span>Choose</span> Scalekit ?
          </MainTitle>
          <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
            Discover the advantages of partnering with us for funding and credit
            repair. Our proven strategies and dedicated team ensure your
            financial success.
          </MainSubTitle>
          <div className="cardCWp" data-aos="fade-up" data-aos-duration="3000">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <WhyChoiseCard
                  CardSvg={svgOne}
                  CardTitle="Done For you"
                  CardText="No bullshit, we do most of the work for you and the rest with you. This is why we can guarantee results."
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <WhyChoiseCard
                  CardSvg={svgTwo}
                  CardTitle="Performance-Based"
                  CardText="A big chunk of our fees is performance based. We put our money where our mouth is."
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <WhyChoiseCard
                  CardSvg={svgThree}
                  CardTitle="Manual underwriting"
                  CardText="With our own underwriters at the banks and a manual process we get you 3-5x the funding amount of our competitors."
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default WhyChoise;
