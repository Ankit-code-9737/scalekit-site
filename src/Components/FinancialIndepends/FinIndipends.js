import React from "react";
import "./FinIndipends.css";
import { Container, MainTitle } from "../../Style";
import IndiImg from "../../images/IndipdsImg.png";
import { IndiCard } from "./IndiCard";

const FinIndipends = () => {
  return (
    <>
      <div className="FinandivWp pt-60 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            The first step towards financial independence is to learn how to
            "credit stack."
          </MainTitle>
          <div className="FinanIndsWp">
            <div className="row">
              <div
                className="col-lg-5 text-center"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <img className="w-100" src={IndiImg} alt=""></img>
              </div>
              <div className="col-lg-7">
                <div
                  className="FinanIndsCard"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <IndiCard
                    Numer="1"
                    Title='"Master the Art of Credit Stacking to Take Control of Your Finances!"'
                    Text="In this comprehensive guide, you'll learn the art of strategically managing multiple credit lines to your advantage. From optimizing your credit utilization."
                  />
                  <IndiCard
                    Numer="2"
                    Title="Confidence in Financial Decision-Making"
                    Text="In this comprehensive guide, you'll learn the art of strategically managing multiple credit lines to your advantage. From optimizing your credit utilization."
                  />
                  <IndiCard
                    Numer="3"
                    Title='"Financial Liberation Starts Here: Learn How to Credit Stack."'
                    Text="In this comprehensive guide, you'll learn the art of strategically managing multiple credit lines to your advantage. From optimizing your credit utilization."
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FinIndipends;
