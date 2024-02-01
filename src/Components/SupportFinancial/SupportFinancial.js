import React from "react";
import "./SupportFinancial.css";
import { Container, MainTitle } from "../../Style";
import { Financialcard } from "./Financialcard";

const SupportFinancial = () => {
  return (
    <>
      <div className="SupFinanWp pt-60 pb-60">
        <Container>
          <div className="row align-items-center">
            <div className="col-xl-4">
              <MainTitle
                className="mb-4 mb-xl-0"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                We Support in your <span>financial expanding</span>
              </MainTitle>
            </div>
            <div className="col-xl-8">
              <div
                className="CardSuFiWpp"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <Financialcard PtgText="90%" parText="Happy Client" />
                <Financialcard PtgText="30%" parText="Decrease Expenses" />
                <Financialcard PtgText="7.8M" parText="Money Flows Users" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SupportFinancial;
