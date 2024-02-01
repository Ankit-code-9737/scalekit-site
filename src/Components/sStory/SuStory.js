import React from "react";
import "./SuStory.css";
import { Container, MainTitle } from "../../Style";
import { SuStoryCard } from "./SuStoryCard";

const SuStory = () => {
  return (
    <>
      <div className="sStoryWp pt-60 pb-60">
        <Container>
          <MainTitle data-aos="fade-up" data-aos-duration="3000">
            Success <span>Stories</span>
          </MainTitle>
          <div
            className="SuStoryCardWp"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <SuStoryCard
                  CardLab="$90K"
                  CardP="The Chase Ink card in the amount of $25,000 has just been approved for me. That comes out to a total of $90k at 0% interest over the course of two months with just three banks, and I still have three more to choose from based on your recommendations. with further options awaiting based."
                  CardText="-Fernand"
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <SuStoryCard
                  CardLab="$120K"
                  CardP="Since I joined Credit Stacking 1 year and 50 days ago, I have been able to get around $120,000 in 0% interest business credit over that time. For this group's endeavors to be successful, each of its resources must be utilized in full, making Credit Stacking a game-changer."
                  CardText="-Dante"
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <SuStoryCard
                  CardLab="120 Points"
                  CardP="I've started working on cleaning up my credit history a few months ago and have made some progress. There is no trace of any of the previous criticisms left behind. My score has increased by 70–100 points or more, and I am now prepared to begin the process business ."
                  CardText="-Lee"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SuStory;
