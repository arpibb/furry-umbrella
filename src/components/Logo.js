import React from "react";
import styled from "styled-components";
import LogoImage from "../images/s20_logo.svg";
import { useWindowSize } from "../lib/useWindowSize";
import { mediaQueries, screenSizes } from "../styles/variables";
import { StaticImage } from "gatsby-plugin-image";

const StyledContainer = styled.div`
  position: relative;
  width: 200px;
  height: auto;
  margin-right: 5px;

  ${mediaQueries.small} {
    width: 100%;
    height: 100%;
    padding-top: 1.5px;
    margin-right: 0px;
  }
`;

const StyledLogo = styled(LogoImage)`
  width: 100%;
  height: 100%;
`;

const Logo = () => {
  const { width } = useWindowSize();

  const isPhoneScreen = width <= screenSizes.phone;
  return (
    <StyledContainer>
      {isPhoneScreen ? (
        <StaticImage
          src="../images/s20_logo.png"
          alt="Spandau20 record label logo"
        />
      ) : (
        <StyledLogo />
      )}
    </StyledContainer>
  );
};

export default Logo;
