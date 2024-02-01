import React from "react";
import "./FAQ.css";
import { Container, MainSubTitle, MainTitle } from "../../Style";

const CrFAQ = () => {
  return (
    <>
      <div className="FAQ-Wrp pt-60 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            Frequently <span>Asked</span> Questions
          </MainTitle>
          <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
            Unlocking Financial Clarity: Your FAQ Guide to Smart Money
            Management.
          </MainSubTitle>
          <div
            className="accordion accordion-flush"
            id="accordionFlushExample"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Is it possible to get rid of negative credit?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  It's illegal to erase any accurate information on your credit
                  report to improve your credit score, but you have a legal
                  right to dispute any and all errors that hurt your credit,
                  which is where the Xredit team comes in to help! Any
                  subscriber that puts information on your credit report, must
                  be able to verify that information is 100% accurate, according
                  to the law. As an example, it’s our proprietary system in how
                  we structure our disputes, on your behalf,
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How exactly does Xredit improve my credit score?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  It's illegal to erase any accurate information on your credit
                  report to improve your credit score, but you have a legal
                  right to dispute any and all errors that hurt your credit,
                  which is where the Xredit team comes in to help! Any
                  subscriber that puts information on your credit report, must
                  be able to verify that information is 100% accurate, according
                  to the law. As an example, it’s our proprietary system in how
                  we structure our disputes, on your behalf,
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  How long would it take to get my credit back in good standing?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  It's illegal to erase any accurate information on your credit
                  report to improve your credit score, but you have a legal
                  right to dispute any and all errors that hurt your credit,
                  which is where the Xredit team comes in to help! Any
                  subscriber that puts information on your credit report, must
                  be able to verify that information is 100% accurate, according
                  to the law. As an example, it’s our proprietary system in how
                  we structure our disputes, on your behalf,
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CrFAQ;
