import React from "react";
import "./Footer.css";
import { Container, ButtonSocial } from "../../Style";
// import { NavLink } from "react-router-dom";
// import logo from "../../images/scalekit-main.svg";
// import { ScrollTop } from "../ScrollTop";

const Footer = () => {
  // latust date covert to year
  const currentDate = new Date();
  const getYear = `${currentDate.getFullYear()}`;

  return (
    <>
      <div className="Footer">
        <Container>
          {/* <div className="FooterMainWp">
            <div className="row">
              <div className="col-xl-2 col-lg-12">
                <div className="Logo">
                  <img src={logo} alt="" />
                </div>
              </div>
              <div className="col-xl-7 col-lg-8">
                <div className="Links">
                  <div className="LinkWps">
                    <h5>Company</h5>
                    <NavLink to="" onClick={ScrollTop}>
                      <FooterLink>Career</FooterLink>
                    </NavLink>
                    <NavLink to="" onClick={ScrollTop}>
                      <FooterLink>FAQs</FooterLink>
                    </NavLink>
                    <NavLink to="/about" onClick={ScrollTop}>
                      <FooterLink>About Us</FooterLink>
                    </NavLink>
                    <NavLink to="" onClick={ScrollTop}>
                      <FooterLink>Partner </FooterLink>
                    </NavLink>
                    <NavLink to="" onClick={ScrollTop}>
                      <FooterLink>Customer Feedback </FooterLink>
                    </NavLink>
                  </div>
                  <div className="LinkWps">
                    <h5>Services</h5>
                    <NavLink to="/createrepair" onClick={ScrollTop}>
                      <FooterLink>Credit Repair</FooterLink>
                    </NavLink>
                    <NavLink to="/businessfunding" onClick={ScrollTop}>
                      <FooterLink>Business credit </FooterLink>
                    </NavLink>
                    <NavLink to="" onClick={ScrollTop}>
                      <FooterLink>Business Marchant </FooterLink>
                    </NavLink>
                    <NavLink to="" onClick={ScrollTop}>
                      <FooterLink>Marchant Processing </FooterLink>
                    </NavLink>
                  </div>
                  <div className="LinkWps">
                    <h5>Links</h5>
                    <NavLink to="/" onClick={ScrollTop}>
                      <FooterLink>Home page</FooterLink>
                    </NavLink>

                    <NavLink to="" onClick={ScrollTop}>
                      <FooterLink>Product</FooterLink>
                    </NavLink>
                  </div>
                  <div className="LinkWps">
                    <h5>Resources</h5>
                    <NavLink to="" onClick={ScrollTop}>
                      <FooterLink>Purple Platform </FooterLink>
                    </NavLink>
                    <NavLink to="" onClick={ScrollTop}>
                      <FooterLink>Terms of Use</FooterLink>
                    </NavLink>
                    <NavLink to="" onClick={ScrollTop}>
                      <FooterLink>Privacy Policy</FooterLink>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="Subscribe">
                  <h5>Resources</h5>
                  <p>
                    Join our newsletter to stay up to date on features and
                    releases.
                  </p>
                  <div className="form-div">
                    <form className="d-flex" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Enter your email"
                        aria-label="Search"
                      />
                      <Button href="/">Subscribe</Button>
                    </form>
                  </div>
                  <p
                    style={{
                      fontSize: "12px",
                      fontFamily: "GeneralSans-Medium",
                      marginTop: "8px",
                    }}
                  >
                    By subscribing you agree to with our Privacy Policy and
                    provide consent to receive updates from our company.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="copyRIght">
            <p className="mb-0">© {getYear} Scalekit. All rights reserved</p>
            <div className="socialMedia">
              <ButtonSocial href="https://www.linkedin.com/in/rishi-panchal-b6830714a/">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.56928 1.64657C3.54869 0.711902 2.8803 0 1.79494 0C0.709573 0 0 0.711902 0 1.64657C0 2.56189 0.6886 3.29429 1.75375 3.29429H1.77403C2.8803 3.29429 3.56928 2.56189 3.56928 1.64657Z"
                    fill="white"
                  />
                  <path
                    d="M3.36032 4.59546H0.187614V14.1281H3.36032V4.59546Z"
                    fill="white"
                  />
                  <path
                    d="M11.1493 4.37158C13.2371 4.37158 14.8023 5.73433 14.8023 8.66235L14.8022 14.1281H11.6296V9.02811C11.6296 7.74711 11.1705 6.87298 10.022 6.87298C9.14544 6.87298 8.62335 7.46227 8.39405 8.03144C8.31016 8.23542 8.28957 8.51962 8.28957 8.80452V14.1283H5.11649C5.11649 14.1283 5.1583 5.49018 5.11649 4.59568H8.28957V5.9459C8.71067 5.29683 9.46484 4.37158 11.1493 4.37158Z"
                    fill="white"
                  />
                </svg>
              </ButtonSocial>
              <ButtonSocial href="https://www.facebook.com/share/zRtCqyyKrgL1zxQH/?mibextid=K35XfP">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66164 15V8.1583H10.9572L11.3016 5.49117H8.66164V3.7886C8.66164 3.01665 8.87513 2.49057 9.98336 2.49057L11.3945 2.48999V0.104422C11.1505 0.072709 10.3128 0 9.33778 0C7.30183 0 5.90798 1.24272 5.90798 3.52445V5.49117H3.60547V8.1583H5.90798V15H8.66164Z"
                    fill="white"
                  />
                </svg>
              </ButtonSocial>
              <ButtonSocial href="">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5807 2.97938L6.61008 3.46381L6.12044 3.40449C4.33817 3.1771 2.78113 2.40597 1.45911 1.11085L0.812795 0.46824L0.646319 0.942786C0.293781 2.00063 0.519014 3.11778 1.25347 3.86915C1.64518 4.28437 1.55704 4.34369 0.881344 4.09653C0.646319 4.01744 0.440672 3.95812 0.421087 3.98778C0.352538 4.05699 0.587563 4.95665 0.773624 5.31256C1.02823 5.80687 1.54725 6.29131 2.11523 6.57801L2.59507 6.8054L2.02709 6.81528C1.4787 6.81528 1.45911 6.82517 1.51787 7.03278C1.71372 7.6754 2.48735 8.35755 3.34911 8.65415L3.95626 8.86176L3.42745 9.17812C2.64403 9.63289 1.72352 9.88994 0.803002 9.90971C0.36233 9.9196 0 9.95914 0 9.9888C0 10.0877 1.19471 10.6413 1.88999 10.8588C3.97584 11.5014 6.4534 11.2246 8.31401 10.1272C9.63603 9.34619 10.958 7.79403 11.575 6.29131C11.9079 5.49051 12.2409 4.02733 12.2409 3.3254C12.2409 2.87063 12.2703 2.81131 12.8187 2.26756C13.1418 1.95119 13.4454 1.60517 13.5041 1.50631C13.6021 1.31847 13.5923 1.31847 13.0929 1.48654C12.2605 1.78313 12.143 1.74358 12.5543 1.29869C12.8578 0.982331 13.2202 0.408922 13.2202 0.240854C13.2202 0.211195 13.0733 0.260627 12.9068 0.349604C12.7305 0.448467 12.3388 0.596763 12.045 0.68574L11.5162 0.853808L11.0364 0.527558C10.772 0.349604 10.3999 0.151877 10.204 0.0925586C9.70458 -0.0458505 8.94074 -0.0260777 8.49028 0.132104C7.26619 0.57699 6.49257 1.72381 6.5807 2.97938Z"
                    fill="white"
                  />
                </svg>
              </ButtonSocial>
              <ButtonSocial href="https://instagram.com/mrfundible?igshid=OGQ5ZDc2ODk2ZA==">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 7.5C11 9.43307 9.433 11 7.5 11C5.567 11 4 9.433 4 7.5C4 5.567 5.567 4 7.5 4C9.433 4 11 5.567 11 7.5Z"
                    fill="white"
                  />
                  <path
                    d="M14.6317 2.10455C14.4851 1.70718 14.2512 1.34773 13.9474 1.05262C13.6523 0.748725 13.2929 0.514881 12.8955 0.368297C12.5731 0.243146 12.0889 0.094097 11.1969 0.0535208C10.232 0.00952175 9.94279 0 7.50012 0C5.05721 0 4.76795 0.00927201 3.80333 0.053271C2.91141 0.0940962 2.42685 0.243084 2.1048 0.368297C1.70737 0.514822 1.34789 0.748674 1.05287 1.05262C0.74898 1.34774 0.515064 1.70718 0.368297 2.10455C0.243146 2.42692 0.094097 2.9114 0.0535208 3.80333C0.00952175 4.76795 0 5.05721 0 7.50012C0 9.94279 0.00952175 10.232 0.0535208 11.1969C0.094097 12.0888 0.243146 12.5731 0.368297 12.8955C0.514974 13.2928 0.748807 13.6523 1.05262 13.9474C1.34768 14.2513 1.70715 14.4851 2.10455 14.6317C2.42692 14.7571 2.91141 14.9062 3.80333 14.9467C4.76795 14.9907 5.05696 15 7.49988 15C9.94304 15 10.2323 14.9907 11.1967 14.9467C12.0886 14.9062 12.5731 14.7571 12.8955 14.6317C13.29 14.4795 13.6483 14.2464 13.9474 13.9474C14.2464 13.6483 14.4795 13.29 14.6317 12.8955C14.7569 12.5731 14.9059 12.0889 14.9467 11.1969C14.9907 10.232 15 9.94279 15 7.50012C15 5.05721 14.9907 4.76795 14.9467 3.80333C14.9062 2.9114 14.7571 2.42685 14.6317 2.10455ZM7.50012 12.1976C4.90555 12.1976 2.80225 10.0944 2.80225 7.49988C2.80225 4.9053 4.90555 2.80225 7.50012 2.80225C10.0945 2.80225 12.1978 4.9053 12.1978 7.49988C12.1978 10.0944 10.0945 12.1976 7.50012 12.1976ZM12.3835 3.71434C11.7772 3.71434 11.2857 3.22276 11.2857 2.61654C11.2857 2.01033 11.7772 1.51868 12.3835 1.51868C12.9898 1.51868 13.4813 2.0102 13.4813 2.61648C13.4811 3.22276 12.9898 3.71434 12.3835 3.71434Z"
                    fill="white"
                  />
                </svg>
              </ButtonSocial>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
