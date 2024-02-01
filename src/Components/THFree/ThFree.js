import React from "react";
import "./ThFree.css";
import { Container, MainTitle, MainSubTitle } from "../../Style";
import ThfreeImg from "../../images/ThfreeImage.png";
import { ThFreeCard } from "./ThFreeCard";

import svgOne from "../../images/compoSvg/ThFreeOne.svg";
import svgTwo from "../../images/compoSvg/ThFreeTwo.svg";
import svgThree from "../../images/compoSvg/ThFreeThree.svg";
import svgFour from "../../images/compoSvg/ThFreeFour.svg";

const ThFree = () => {
  return (
    <>
      <div className="MainThfree pt-60 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            Transparent <span>and</span> Hassle-Free
          </MainTitle>
          <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
            Rest assured, we believe in complete transparency throughout the
            process. No hidden fees, no unexpected surprises – just a
            straightforward and stress-free experience.
          </MainSubTitle>
          <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
            However, dont expect shortcuts or get-rich-quick.
          </MainSubTitle>
          <div className="ThfreeCardwp">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="LeftCard"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6">
                      <ThFreeCard
                        ImgSrc={svgOne}
                        CardTitle="Audit"
                        CardText="We analyze your financial situation and credit report in detail to make sure you succeed."
                      />
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6">
                      <ThFreeCard
                        ImgSrc={svgTwo}
                        CardTitle="Credit optimization"
                        CardText="We optimize your personal and business credit to maximize your fundability."
                      />
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6">
                      <ThFreeCard
                        ImgSrc={svgThree}
                        CardTitle="Funding"
                        CardText="We get you access to business funding through our manual underwriting process."
                      />
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6">
                      <ThFreeCard
                        ImgSrc={svgFour}
                        CardTitle="Investments"
                        CardText="Optionally, we help you leverage your funding to generate passive income."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="RightImg text-center"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <img className="w-100" src={ThfreeImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ThFree;
