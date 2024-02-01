import React from "react";
import ContactTeam from "../Components/ContactTeam/ContactTeam";
import ReqFinancing from "../Components/ReqFinancing/ReqFinancing";
import { Container, MainSubTitle, MainTitle } from "../Style";

const ContactUs = () => {
  return (
    <>
      <ContactTeam />
      <ReqFinancing
        ReqFTitle="Set up a Time for a Strategy Session."
        ReqFP='"From No Credit to Bright Investments: Your Pathway to Financial Growth Begins Here."'
      />
      <Container>
        <MainTitle
          data-aos="fade-up"
          data-aos-duration="3000"
          style={{ fontSize: "30px" }}
        >
          Thank you for Submitting!
        </MainTitle>
        <MainSubTitle
          data-aos="fade-up"
          data-aos-duration="3000"
          style={{ margin: "inherit", maxWidth: "100%" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </MainSubTitle>
      </Container>
    </>
  );
};

export default ContactUs;
