import React from "react";
import RatingImg from "../../images/rating-img.png";
import "../Rating/Rating.css";

function Rating() {
  return (
    <>
      <div className="ratingWrp" data-aos="fade-up" data-aos-duration="3000">
        <div className="startDiv">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0L25.1725 12.8807L39.0211 13.8197L28.3693 22.7193L31.7557 36.1803L20 28.8L8.2443 36.1803L11.6307 22.7193L0.97887 13.8197L14.8275 12.8807L20 0Z"
              fill="#F9CD5D"
            />
          </svg>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0L25.1725 12.8807L39.0211 13.8197L28.3693 22.7193L31.7557 36.1803L20 28.8L8.2443 36.1803L11.6307 22.7193L0.97887 13.8197L14.8275 12.8807L20 0Z"
              fill="#F9CD5D"
            />
          </svg>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0L25.1725 12.8807L39.0211 13.8197L28.3693 22.7193L31.7557 36.1803L20 28.8L8.2443 36.1803L11.6307 22.7193L0.97887 13.8197L14.8275 12.8807L20 0Z"
              fill="#F9CD5D"
            />
          </svg>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0L25.1725 12.8807L39.0211 13.8197L28.3693 22.7193L31.7557 36.1803L20 28.8L8.2443 36.1803L11.6307 22.7193L0.97887 13.8197L14.8275 12.8807L20 0Z"
              fill="#F9CD5D"
            />
          </svg>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M20 0L25.1725 12.8807L39.0211 13.8197L28.3693 22.7193L31.7557 36.1803L20 28.8L8.2443 36.1803L11.6307 22.7193L0.97887 13.8197L14.8275 12.8807L20 0Z"
              fill="url(#paint0_linear_913_5363)"
            />
            <mask
              id="mask0_913_5363"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="34"
              height="40"
            >
              <rect width="34" height="40" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_913_5363)">
              <path
                d="M20 0L25.1725 12.8807L39.0211 13.8197L28.3693 22.7193L31.7557 36.1803L20 28.8L8.2443 36.1803L11.6307 22.7193L0.97887 13.8197L14.8275 12.8807L20 0Z"
                fill="#F9CD5D"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_913_5363"
                x1="0"
                y1="0"
                x2="42.3936"
                y2="2.72202"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1279FC" />
                <stop offset="1" stopColor="#02BD6E" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h6>4.9/5.0 Rating</h6>
        <img src={RatingImg} alt="" />
      </div>
    </>
  );
}

export default Rating;
