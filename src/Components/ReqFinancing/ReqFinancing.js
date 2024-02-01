import React from "react";
import "./ReqFinancing.css";
import { NavLink } from "react-router-dom";
import { ScrollTop } from "../ScrollTop";
import {
  ButtonIcon,
  Container,
  MainSubTitle,
  MainTitle,
  ReqFinanWpBtn,
} from "../../Style";
import arrowSvg from "../../images/arrow-ver.svg";

const ReqFinancing = ({ ReqFTitle, ReqFP }) => {
  return (
    <>
      <div className="ReqFinanWp pt-60 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            {ReqFTitle}
          </MainTitle>
          <MainSubTitle data-aos="fade-up" data-aos-duration="3000">
            {ReqFP}
          </MainSubTitle>
          <div
            className="detailDiv"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <ReqFinanWpBtn>Build a comprehensive funding rounds</ReqFinanWpBtn>
            <img src={arrowSvg} alt="" />
            <ReqFinanWpBtn>
              Create Road map and financial planning
            </ReqFinanWpBtn>
            <img src={arrowSvg} alt="" />
            <ReqFinanWpBtn>Provide Optimization steps</ReqFinanWpBtn>
            <img src={arrowSvg} alt="" />
            <ReqFinanWpBtn>Build business credit</ReqFinanWpBtn>
            <img src={arrowSvg} alt="" />
            <ReqFinanWpBtn>Audit your credit</ReqFinanWpBtn>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000">
            <NavLink to="" onClick={ScrollTop}>
              <ButtonIcon className="m-auto">
                Apply Now
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.75 11.7256L4.75 11.7256"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.7002 5.701L19.7502 11.725L13.7002 17.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonIcon>
            </NavLink>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ReqFinancing;
