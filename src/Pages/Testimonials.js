import React from "react";
import { Container, MainTitle } from "../Style";
import TestiImg from "../images/Testimo.png";
import WinsSlider from "../Components/MemberWins/WinsSlider";
import SatisfiedClients from "../Components/SatisfiedClients/SatisfiedClients";

const Testimonials = () => {
  return (
    <>
      <div className="TestiWrp pt-120 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            Client <span>Testimonials</span>
          </MainTitle>
          <img
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-100 mt-60"
            src={TestiImg}
            alt=""
          />
        </Container>
      </div>
      <SatisfiedClients />
      <WinsSlider />
    </>
  );
};

export default Testimonials;
