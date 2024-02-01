import React from "react";
import "./SatisfiedClients.css";
import { Container, MainTitle, MainSubTitle } from "../../Style";
import { SatisfiedCliCard } from "./SatisfiedCliCard";
// import { NavLink } from "react-router-dom";
// import { ScrollTop } from "../ScrollTop";

import jsonData from "../../testimonials.json";

const SatisfiedClients = () => {
  return (
    <>
      <div className="SatisfiedCWp pt-60 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            Hear From <span> Our Satisfied </span> Clients
          </MainTitle>
          <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
            Our clients' success stories speak for themselves. Read their
            experiences and see how we've transformed their financial lives.
          </MainSubTitle>
          <div
            className="CardSadWp"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="row">
              {jsonData.slice(0, 4).map((card, id) => (
                <SatisfiedCliCard
                  key={id}
                  FirstText={card.firsttext}
                  CardTitle={card.title}
                  CardText={card.text}
                />
              ))}
            </div>
          </div>
          {/* <div data-aos="fade-up" data-aos-duration="3000">
            <NavLink to="/testimonials" onClick={ScrollTop}>
              <ButtonIcon className="m-auto">
                View More
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 11.7256L5.25 11.7256"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.2012 5.701L20.2512 11.725L14.2012 17.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonIcon>
            </NavLink>
          </div> */}
        </Container>
      </div>
    </>
  );
};

export default SatisfiedClients;
