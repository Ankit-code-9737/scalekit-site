import React, { useState } from "react";
import "./SerFrom.css";
import { ButtonIcon } from "../../Style";

export const ConFrom = ({ FormTItle }) => {
  // Form State start
  const [userRegistration, setuserRegistration] = useState({
    name: "",
    email: "",
    phone: "",
    companyname: "",
    subjectname: "",
    message: "",
  });

  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuserRegistration({ ...setuserRegistration, [name]: value });
  };

  return (
    <>
      <div className="SeForm">
        <h6>{FormTItle}</h6>

        <from action="">
          <div className="row">
            <div className="col-lg-6">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                placeholder="David"
                value={userRegistration.name}
                onChange={handelInput}
                className="form-control"
                autoComplete="off"
                name="name"
                id="name"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="email" className="form-label">
                E-mail:
              </label>
              <input
                type="email"
                placeholder="david23@gmail.com"
                value={userRegistration.email}
                onChange={handelInput}
                className="form-control"
                autoComplete="off"
                name="email"
                id="email"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="phone" className="form-label">
                Phone No:
              </label>
              <input
                type="number"
                placeholder="+91 1234567890"
                value={userRegistration.phone}
                onChange={handelInput}
                className="form-control"
                autoComplete="off"
                name="phone"
                id="phone"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="companyname" className="form-label">
                Company Name:
              </label>
              <input
                type="text"
                placeholder="Scalekit"
                value={userRegistration.companyname}
                onChange={handelInput}
                className="form-control"
                autoComplete="off"
                name="companyname"
                id="companyname"
              />
            </div>
            <div className="col-lg-12">
              <label htmlFor="subjectname" className="form-label">
                Subject Name:
              </label>
              <input
                type="text"
                placeholder="What’s your message about?"
                value={userRegistration.subjectname}
                onChange={handelInput}
                className="form-control"
                autoComplete="off"
                name="subjectname"
                id="subjectname"
              />
            </div>
            <div className="col-lg-12">
              <label htmlFor="name" className="form-label">
                Message:
              </label>
              <textarea
                type="text"
                placeholder="Write your Message  Here..."
                value={userRegistration.message}
                onChange={handelInput}
                className="form-control"
                autoComplete="off"
                name="message"
                id="message"
              />
            </div>
          </div>

          <ButtonIcon>
            Send Message
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8325 8.17463L10.109 13.9592L3.59944 9.88767C2.66675 9.30414 2.86077 7.88744 3.91572 7.57893L19.3712 3.05277C20.3373 2.76963 21.2326 3.67283 20.9456 4.642L16.3731 20.0868C16.0598 21.1432 14.6512 21.332 14.0732 20.3953L10.106 13.9602"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonIcon>
        </from>
      </div>
    </>
  );
};
