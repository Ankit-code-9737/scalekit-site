import React, { useRef } from "react";
import "./SerFrom.css";
// import { ButtonIcon } from "../../Style";
import emailjs from "@emailjs/browser";

export const SerFrom = ({ FormTItle }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bwx8cux",
        "template_cjiv354",
        form.current,
        "wxNpEPm1neQo921jr"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent!!!");
        },
        (response) => {
          console.log(response.text);
          console.log("Message sent!!!");
        },
        (error) => {
          console.log(error.text);
          console.log("Message not sent!!!");
        }
      );
  };

  const handleAlertClick = () => {
    alert("Thank you for submitting your details...");

    // Use setTimeout to dismiss the alert after 5 minutes
    setTimeout(() => {
      // The alert will automatically close after 5 minutes, but you can't programmatically close it
    }, 300); // 5 minutes in milliseconds
  };

  return (
    <>
      <div className="SeForm" data-aos="fade-up" data-aos-duration="3000">
        <h6>{FormTItle}</h6>

        <form ref={form} onSubmit={sendEmail}>
          <label className="form-label">Name: </label>
          <input className="form-control" type="text" name="user_name" />
          <label className="form-label">Last Name: </label>
          <input className="form-control" type="text" name="user_l_name" />
          <label className="form-label">Best E-mail: </label>
          <input className="form-control" type="email" name="user_email" />
          <label className="form-label">Best Phone Numbers: </label>
          <input className="form-control" type="number" name="user_phone" />

          <input
            type="submit"
            className="themeBtn"
            value={`Send Message`}
            onClick={handleAlertClick}
          />
          {/* <ButtonIcon type="submit" value="Send">
            Let's Get Started
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
          </ButtonIcon> */}
        </form>

        {/* <from action="">
          <div className="">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              value={userRegistration.name}
              onChange={handelInput}
              className="form-control"
              autoComplete="off"
              name="name"
              id="name"
            />
          </div>
          <div className="">
            <label htmlFor="lastname" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              value={userRegistration.lastname}
              onChange={handelInput}
              className="form-control"
              autoComplete="off"
              name="lastname"
              id="lastname"
            />
          </div>
          <div className="">
            <label htmlFor="email" className="form-label">
              Best E-mali:
            </label>
            <input
              type="email"
              value={userRegistration.email}
              onChange={handelInput}
              className="form-control"
              autoComplete="off"
              name="email"
              id="email"
            />
          </div>
          <div className="">
            <label htmlFor="phone" className="form-label">
              Best Phone Numbers:
            </label>
            <input
              type="number"
              value={userRegistration.phone}
              onChange={handelInput}
              className="form-control"
              autoComplete="off"
              name="phone"
              id="phone"
            />
          </div>

          <ButtonIcon style={{ cursor: "pointer" }}>
            Let's Get Started
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
        </from> */}
      </div>
    </>
  );
};
