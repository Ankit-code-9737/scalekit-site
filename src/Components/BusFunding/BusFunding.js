import React from "react";
import "./BusFunding.css";
import { Container, MainSubTitle, MainTitle } from "../../Style";
import { SerFrom } from "../SerFrom/SerFrom";
import Rating from "../Rating/Rating";

const BusFunding = () => {
  return (
    <>
      <div className="BusFunding pt-120 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            Business <span>Funding</span>
          </MainTitle>
          <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
            Begin your journey today with a complimentary evaluation by our team
            of credit experts!"
          </MainSubTitle>
          <div className="FormWp">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <SerFrom FormTItle="Schedule a free consultation now to see if you qualify!" />
              </div>
              <div className="col-lg-6">
                <div
                  className="Details"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <Rating />
                  <MainTitle>Establish Your Business Credit FAST.</MainTitle>
                  <MainSubTitle>
                    Obtain business credit in as little as 45 days with our
                    proven formula. Get started today by booking a call with one
                    of our business credit experts.
                  </MainSubTitle>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BusFunding;
