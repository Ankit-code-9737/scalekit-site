import React from "react";
import "./FAQ.css";
import { Container, MainSubTitle, MainTitle } from "../../Style";

const FAQ = () => {
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
                  Will the act of applying have an influence on my credit?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Yes, the act of applying for credit can have an influence on
                  your credit. When you apply for credit, whether it's a loan,
                  credit card, or another form of credit, a lender will
                  typically perform a "hard inquiry" on your credit report. This
                  inquiry allows the lender to assess your creditworthiness and
                  determine if you qualify for the credit you're seeking.
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
                  How quickly can I get my funding?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Yes, the act of applying for credit can have an influence on
                  your credit. When you apply for credit, whether it's a loan,
                  credit card, or another form of credit, a lender will
                  typically perform a "hard inquiry" on your credit report. This
                  inquiry allows the lender to assess your creditworthiness and
                  determine if you qualify for the credit you're seeking.
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
                  What information do I need to apply?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Yes, the act of applying for credit can have an influence on
                  your credit. When you apply for credit, whether it's a loan,
                  credit card, or another form of credit, a lender will
                  typically perform a "hard inquiry" on your credit report. This
                  inquiry allows the lender to assess your creditworthiness and
                  determine if you qualify for the credit you're seeking.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FAQ;
