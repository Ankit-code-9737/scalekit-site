import React from "react";
import "./AggApproach.css";
import { Container, MainSubTitle, MainTitle } from "../../Style";
import { ApproachCard } from "./ApproachCard";

import OneS from "../../images/compoSvg/AggOne.svg";
import TwoS from "../../images/compoSvg/AggTwo.svg";
import ThreeS from "../../images/compoSvg/AggThree.svg";
import FourS from "../../images/compoSvg/AggFour.svg";

const AggApproach = () => {
  return (
    <>
      <div className="AggApproachWrp pt-60 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            Aggressive <span>Approach</span>
          </MainTitle>
          <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
            Empowering Your Wealth with Aggressive Investment Strategies
          </MainSubTitle>
          <div
            className="CardAppWrp"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <ApproachCard AppSrc={OneS} AppText="Negative Remark" />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <ApproachCard AppSrc={TwoS} AppText="Late Payment" />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <ApproachCard AppSrc={ThreeS} AppText="Foreclosures" />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <ApproachCard AppSrc={FourS} AppText="Closed Account" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AggApproach;
