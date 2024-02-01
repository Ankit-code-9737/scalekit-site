import styled, { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}`;

export const Container = styled.div`
  width: 100%;
  max-width: 1580px;
  margin-right: auto;
  margin-left: auto;
  display: inherit;
  padding: 0 20px;
  align-items: center;

  @media only screen and (max-width: 991px) {
    max-width: 800px;
  }
`;

export const Button = styled.a`
  background: linear-gradient(93.67deg, #1279fc 0%, #02bd6e 100%);
  border-radius: 100px;
  padding: 11px 24px;
  color: #fff;
  text-decoration: none;
  max-width: max-content;
  text-align: center;
  transition: 0.3s;
  border: solid 1px transparent;
  font-family: "GeneralSans-Medium";
  display: block;

  &:hover {
    cursor: pointer;
    color: #fff;
    transform: scale(0.96);
    box-shadow: 0px 0px 16px -6px #000;
  }
`;

export const ButtonIcon = styled.a`
  background: linear-gradient(93.67deg, #1279fc 0%, #02bd6e 100%);
  border-radius: 100px;
  padding: 11px 24px;
  color: #fff;
  text-decoration: none;
  max-width: max-content;
  text-align: center;
  transition: 0.3s;
  border: solid 1px transparent;
  font-family: "GeneralSans-Medium";
  display: block;

  svg {
    margin-left: 8px;
    path {
      stroke: #fff;
    }
  }

  &:hover {
    cursor: pointer;
    color: #fff;
    transform: scale(0.96);
    box-shadow: 0px 0px 16px -6px #000;
  }
`;

export const ButtonSocial = styled.a`
  background: linear-gradient(93.67deg, #1279fc 0%, #02bd6e 100%);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    transform: scale(1.08);
  }
`;

export const MainTitle = styled.h2`
  font-size: 54px;
  color: #171717;
  font-family: "ClashDisplay-Semibold";
  margin-bottom: 8px;
  text-align: center;

  span {
    background-image: linear-gradient(93.67deg, #1279fc 0%, #02bd6e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media only screen and (max-width: 1440px) {
    font-size: 46px;
  }

  @media only screen and (max-width: 991px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 30px;
  }
`;

export const MainSubTitle = styled.p`
  font-size: 18px;
  color: #8f8f8f;
  font-family: "GeneralSans-Medium";
  margin-bottom: 8px;
  max-width: 820px;
  margin: auto;
  text-align: center;

  @media only screen and (max-width: 991px) {
    font-size: 16px;
  }
`;

export const FooterLink = styled.a`
  font-size: 16px;
  color: #171717;
  margin-bottom: 16px;
  font-family: "GeneralSans-Regular";
  display: block;
  text-decoration: none;

  &:hover {
    color: #1279fc;
  }

  @media only screen and (max-width: 991px) {
    margin-bottom: 10px;
  }
`;

export const ReqFinanWpBtn = styled.span`
  padding: 14px 24px;
  background: linear-gradient(141.69deg, #e3f3ff 0%, #e2f6ea 100%);
  border-radius: 16px;
  font-family: "ClashDisplay-Medium";
  font-size: 24px;
  color: #171717;
  display: block;
  width: max-content;
  margin: auto;
  transition: 0.1s;

  &:hover {
    transform: scale(1.01);
  }

  @media only screen and (max-width: 1440px) {
    font-size: 20px;
    padding: 12px 20px;
  }

  @media only screen and (max-width: 991px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    padding: 10px 16px;
  }
`;

export default globalStyle;
