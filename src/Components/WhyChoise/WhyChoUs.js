import React from "react";
import "./WhyChoise.css";
import { Container, MainTitle, MainSubTitle, ButtonIcon } from "../../Style";
import { WhyChoiseCard } from "./WhyChoiseCard";
import { NavLink } from "react-router-dom";
import { ScrollTop } from "../ScrollTop";

import svgOne from "../../images/compoSvg/eCreaditOne.svg";
import svgTwo from "../../images/compoSvg/eCreaditTwo.svg";
import svgThree from "../../images/compoSvg/eCreaditThree.svg";

const WhyChoiseUs = () => {
  return (
    <>
      <div className="WhyChoise pt-60 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            Why <span>Choose</span> Us?
          </MainTitle>
          <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
            Our proven strategies, knowledgable, and dedicated team ensure your
            financial success.
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
                  CardTitle=" Industry-Leading Experience"
                  CardText="With a wealth of industry-leading experience, we bring extensive knowledge and expertise to the table. Over the years, we have."
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <WhyChoiseCard
                  CardSvg={svgTwo}
                  CardTitle="Thriving Finances, Satisfied Clients"
                  CardText="Our proudest achievements are the thriving finances and satisfied smiles of our clients. We take immense pride in our."
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <WhyChoiseCard
                  CardSvg={svgThree}
                  CardTitle="Round-the-Clock Customer Service"
                  CardText="Your financial journey is important to us, which is why our dedicated team is available round-the-clock to support you. No matter."
                />
              </div>
            </div>
          </div>
          <div className="" data-aos="fade-up" data-aos-duration="3000">
            <NavLink to="" onClick={ScrollTop}>
              <ButtonIcon href="/" className="m-auto">
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

export default WhyChoiseUs;
