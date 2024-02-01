import React from "react";
import "./WhyChoise.css";
import { Container, MainTitle, MainSubTitle, ButtonIcon } from "../../Style";
import { WhyChoiseCard } from "./WhyChoiseCard";
import { NavLink } from "react-router-dom";
import { ScrollTop } from "../ScrollTop";

import svgOne from "../../images/compoSvg/eCreaditOne.svg";
import svgTwo from "../../images/compoSvg/eCreaditTwo.svg";
import svgThree from "../../images/compoSvg/eCreaditThree.svg";

const WhyChoise = () => {
  return (
    <>
      <div className="WhyChoise pt-60 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            Expert <span>Credit</span> Repair
          </MainTitle>
          <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
            Repair and rebuild your credit with confidence. Our credit experts
            will work diligently to improve your credit score and increase your
            financial opportunities.
          </MainSubTitle>
          <div
            className="cardCWp eCreadit"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <WhyChoiseCard
                  CardSvg={svgOne}
                  CardTitle="Competition"
                  CardText="Understanding the market environment and positioning of the Unified Payments Interface requires competition analysis. National Payments Corporation of India (NPCI) UPI revolutionized digital payments in India. The competition helps stakeholders understand UPI's strengths, weaknesses, opportunities, and threats for strategic decision-making."
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <WhyChoiseCard
                  CardSvg={svgTwo}
                  CardTitle="Difference"
                  CardText="Understanding the market environment and positioning of the Unified Payments Interface requires competition analysis. National Payments Corporation of India (NPCI) UPI revolutionized digital payments in India. The competition helps stakeholders understand UPI's strengths, weaknesses, opportunities, and threats for strategic decision-making."
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <WhyChoiseCard
                  CardSvg={svgThree}
                  CardTitle="Benefits"
                  CardText="Understanding the market environment and positioning of the Unified Payments Interface requires competition analysis. National Payments Corporation of India (NPCI) UPI revolutionized digital payments in India. The competition helps stakeholders understand UPI's strengths, weaknesses, opportunities, and threats for strategic decision-making."
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <NavLink to="/createrepair" onClick={ScrollTop}>
              <ButtonIcon className="m-auto">
                Learn More
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 11.7256L5.25 11.7256"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.2012 5.701L20.2512 11.725L14.2012 17.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonIcon>
            </NavLink>
          </div>
        </Container>
      </div>
    </>
  );
};

export default WhyChoise;
