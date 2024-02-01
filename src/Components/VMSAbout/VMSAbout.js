import React from "react";
import "./VMSAbout.css";
import { Container } from "../../Style";
import { VmsCard } from "./VmsCard";

const VMSAbout = () => {
  return (
    <>
      <div
        className="VMSWpp pt-60 pb-60"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Container>
          <VmsCard
            VTitle="Vision"
            VText="Our unique fintech solutions will transform your financial path.
                We enable individuals and organisations to prosper in the
                digital economy by providing frictionless online payments and
                intelligent investment platforms."
          />
          <VmsCard
            VTitle="Mission"
            VText="You will be able to get a glimpse of what the banking technology of the future will look 
            like if you take advantage of our innovative solutions. You are in control of how quickly things get done with our comprehensive suite of services, which includes mobile banking and individualised financial planning."
          />
          <VmsCard
            VTitle="Story"
            VText="Join our financial technology company, and you'll be on the leading edge of innovation in the industry. In order to provide you with secure and dependable services,  we make use of cutting-edge technology such as 
            machine learning and data analytics."
          />
        </Container>
      </div>
    </>
  );
};

export default VMSAbout;
