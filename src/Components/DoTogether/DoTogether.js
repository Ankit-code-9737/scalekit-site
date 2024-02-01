import React from "react";
import "./DoTogether.css";
import { Container, MainSubTitle, MainTitle } from "../../Style";
import Dotog from "../../images/doTogether.png";

const DoTogether = () => {
  return (
    <>
      <div className="DoTogether pt-60 pb-120">
        <Container>
          <div className="row">
            <div className="col-lg-7">
              <div
                className="LeftDetails"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <MainTitle>
                  What we could <span>do together</span>
                </MainTitle>
                <MainSubTitle>We have your back.</MainSubTitle>
                <h5>
                  Why should you choose a merchant cash advance company over a
                  traditional bank loan?
                </h5>
                <MainSubTitle>
                  As a merchant cash advance company, what we offer is entirely
                  different from the loan you would receive from a bank. Most
                  traditional loans supplied to businesses from a bank will come
                  with high interest rates, and they can be extremely difficult
                  to qualify for. When you choose a merchant cash advance
                  company over a bank, you are choosing someone who will do
                  their best to go around the challenges to get you the funding
                  you deserve. Our application process is much more lenient than
                  that of a traditional bank loan; almost 90% of all
                  applications are approved! Our merchant cash advance programs
                  do not feature an interest rate but instead have a fixed cost
                  or “fact rate” that will never increase throughout the MCA.
                </MainSubTitle>
                <h5>Scalekit offers exceptional customer satisfaction.</h5>
                <MainSubTitle>
                  Scalekit boasts excellent customer satisfaction. Our customers
                  leave high reviews thanks to our accommodating merchant cash
                  advance programs. We are proud to offer a reliable business
                  funding solution to every business, no matter the industry or
                  type. To learn why our customers rave about Uplyft, contact
                  our funding specialists today to start your journey towards
                  getting the perfect MCA.
                </MainSubTitle>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="RightImg text-center"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <img className="w-100" src={Dotog} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DoTogether;
