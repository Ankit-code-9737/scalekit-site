import React from "react";
import Rating from "../Rating/Rating";
import { Container, Button } from "../../Style";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="HeroSec pt-120 pb-60">
        <Container>
          <h1 className="mainText" data-aos="fade-up" data-aos-duration="3000">
            Unlock Financial Freedom with
          </h1>
          <div
            className="gradientTextBg"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="gradientText">Business Funding</h1>
            <h1 className="gradientText">Credit Repair</h1>
          </div>
          <h6 className="subTitle" data-aos="fade-up" data-aos-duration="3000">
            Empowering Everyday Individuals and Business Owners to Break Free
            from Financial Constraints and Build Lasting Wealth.
          </h6>
          <h6 className="subTitle" data-aos="fade-up" data-aos-duration="3000">
            Secure 0% Business Funding with ScaleKit and realize your dreams of
            personal freedom. Our process is designed to empower you to live
            life on your own terms, without the usual financial constraints. We
            understand that your goals extend beyond mere numbers. That's why we
            take you through the whole process from credit repair to funding to
            passive income investments, allowing you to focus on what truly
            matters – building your future and achieving long-term wealth and
            independence.
          </h6>

          {/* Rating Components  */}
          <Rating />

          <h6 className="subTitle" data-aos="fade-up" data-aos-duration="3000">
            Get Your Personalized Funding Strategy – Start Your Journey to
            Financial Independence Today!
          </h6>

          <div data-aos="fade-up" data-aos-duration="3000">
            <Button href="/" title="" className="m-auto">
              Apply Now
            </Button>
          </div>

          {/* Video start  */}
          <div
            className="terminalVideo"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <iframe
              width="100%"
              height="700"
              src="https://fast.wistia.net/embed/iframe/28dei7bl4y?muted=true&autoplay=1&&wmode=transparent"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Hero;
