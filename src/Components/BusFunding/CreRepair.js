import React from "react";
import "./BusFunding.css";
import { Container, MainSubTitle, MainTitle } from "../../Style";
import { SerFrom } from "../SerFrom/SerFrom";
import Rating from "../Rating/Rating";

const CreRepair = () => {
  return (
    <>
      <div className="BusFunding pt-120 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            Credit <span>Repair</span>
          </MainTitle>
          <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
            Begin your journey today with a complimentary evaluation by our team
            of credit experts!
          </MainSubTitle>
          <div className="FormWp">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <SerFrom FormTItle="Check Your Credit Report for Free Right Now!" />
              </div>
              <div className="col-lg-6">
                <div
                  className="Details"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <Rating />
                  <MainTitle>
                    With our help, mending your credit is a breeze.
                  </MainTitle>
                  <MainSubTitle>
                    Our simple credit restoration service boosts your score.
                    Start a free credit evaluation with one of our professionals
                    today!
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

export default CreRepair;
