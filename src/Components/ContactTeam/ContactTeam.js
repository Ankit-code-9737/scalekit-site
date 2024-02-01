import React from "react";
import "./ContactTeam.css";
import { Container, MainSubTitle, MainTitle } from "../../Style";
import MainImg from "../../images/contact-main.png";
import { ConFrom } from "../SerFrom/ConFrom";

const ContactTeam = () => {
  return (
    <>
      <div className="ContWrp pt-120 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            Contact <span>Our</span> Expert Team
          </MainTitle>
          <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
            Have questions or need assistance? Our friendly team is ready to
            help. Reach out to us and let' as get started on securing your
            financial future.
          </MainSubTitle>
          <div className="CoFromWrp">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="LeftImg"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <img className="w-100" src={MainImg} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="RightFrom"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <ConFrom />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactTeam;
