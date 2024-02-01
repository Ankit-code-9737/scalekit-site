import React from "react";
import "./WinsSlider.css";
import { Container, MainSubTitle, MainTitle } from "../../Style";
import { SliderM } from "./Slider";

// Slick slider
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const WinsSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="MemberWrp pt-60 pb-60">
      <Container>
        <MainTitle data-aos="fade-up" data-aos-duration="3000">
          Member <span>Wins</span>
        </MainTitle>
        <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
          Where Each Member's Success is Everyone's Victory!
        </MainSubTitle>
        <div className="SliderWrp" data-aos="fade-up" data-aos-duration="3000">
          <Slider {...settings}>
            <SliderM />
            <SliderM />
            <SliderM />
            <SliderM />
            <SliderM />
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default WinsSlider;
