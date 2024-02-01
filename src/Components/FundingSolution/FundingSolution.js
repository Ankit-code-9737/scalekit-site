import React from "react";
import "./FundingSolution.css";
import { Container, MainTitle, MainSubTitle } from "../../Style";
import FundingImg from "../../images/funding-solution.png";
import { FundingCard } from "./FundingCard";

function FundingSolution() {
  return (
    <>
      <div className="fundingSolution pt-60 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            Tailored <span>Funding</span> Solutions
          </MainTitle>
          <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
            We offer customized funding solutions to fit your unique needs.
            Whether it's a personal project, business expansion, or debt
            consolidation, we've got you covered
          </MainSubTitle>
          <div className="fundingCardwp">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="image text-center">
                  <img
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="w-100"
                    src={FundingImg}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="Carddiv"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <FundingCard
                    numText="1."
                    titleText="0% Business Funding"
                    paragText="0% APR business funding up to $250,000 to get your business or investments started."
                  />
                  <FundingCard
                    numText="2."
                    titleText="Business Credit Lines"
                    paragText="5 year credit lines up to $5,000,000 to grow your business even further."
                  />
                  <FundingCard
                    numText="3."
                    titleText="LTV Loans"
                    paragText="LTV loans for real estate investors up to 90% LTV in all states."
                  />
                  <FundingCard
                    numText="4."
                    titleText="Debt Consolidation Loans"
                    paragText="Competitive bridge loans to consolidate your personal debt."
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default FundingSolution;
