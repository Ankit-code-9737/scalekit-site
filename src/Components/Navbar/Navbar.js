import "../Navbar/Navbar.css";
import React, { useState, useEffect } from "react";

import { Container, Button } from "../../Style";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/scalekit-main.svg";
import Smalllogo from "../../images/LogoMain.svg";

function NavScrollExample() {
  // Sticky Fuction start
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Sticky Fuction end

  return (
    <Navbar expand="lg" className={`navbar ${isSticky ? "sticky" : ""}`}>
      {/* bg-body-tertiary */}
      <Container>
        <Navbar.Brand href="/">
          <img className="BigLogo" src={logo} alt="" />
          <img className="SmallLogo" src={Smalllogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/businessfunding">
                Business Funding
              </NavDropdown.Item>
              <NavDropdown.Item href="/createrepair">
                Credit Repair
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex">
          <searchBtn
            type="search"
            placeholder="Search"
            className="me-2 searchBtn"
            aria-label="Search"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11.7659"
                cy="11.7664"
                r="8.98856"
                stroke="#171717"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.0176 18.4849L21.5416 21.9997"
                stroke="#171717"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </searchBtn>
          <Button href="/contactus">Contact Us</Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
