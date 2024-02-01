import React from "react";
import "./OurProcess.css";
import { Container, MainSubTitle, MainTitle } from "../../Style";
import { ProcessCard } from "./ProcessCard";

import OneSvg from "../../images/compoSvg/OurProOne.svg";
import TwoSvg from "../../images/compoSvg/OurProTwo.svg";
import ThreeSvg from "../../images/compoSvg/OurProThree.svg";
import FourSvg from "../../images/compoSvg/OurProFour.svg";

const OurProcess = () => {
  return (
    <>
      <div className="OurProcessWrp pt-60 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            Here’s <span>Our</span> process
          </MainTitle>
          <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
            Navigating Investments: Unveiling Our Proven Process for Your
            Financial Journey.
          </MainSubTitle>
          <div
            className="ProcessCardWrp"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <ProcessCard
                  ImgSrc={OneSvg}
                  CardTitle="Contact Us"
                  CardText="Message us or purchase one of our packages to start your journey to excellent credit."
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <ProcessCard
                  ImgSrc={TwoSvg}
                  CardTitle="Free Evaluation"
                  CardText="We're here to help you understand what it takes to achieving your dream credit score, so we'll."
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <ProcessCard
                  ImgSrc={ThreeSvg}
                  CardTitle="Dispute & Repair"
                  CardText="Let us take care of the negative remarks and inquiries. We'll be sure to aggressively."
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <ProcessCard
                  ImgSrc={FourSvg}
                  CardTitle="Tools & Solution"
                  CardText="We'll provide you with a monitoring and reporting suite to ensure you are educated on your credit status, protect."
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OurProcess;
