import React, { useState, useEffect, useContext } from "react";
import { Link } from "gatsby";
import MenuIcon from "./MenuIcon";
import styled from "styled-components";
import Logo from "./Logo";
import { mediaQueries, fontSizes } from "../styles/variables";
import { easeInAnimation } from "../styles/GlobalStyles";
import { MenuContext } from "../context/menuContext";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1000;
  width: fit-content;

  -webkit-animation-name: ${easeInAnimation};
  -webkit-animation-duration: 1s;

  ${mediaQueries.small} {
    padding-bottom: 15px;
    width: 100%;
  }
`;

const CurrentLocation = styled.h2`
  text-transform: uppercase;
  font-family: "neue-haas-grotesk-display";
  font-size: ${fontSizes.xBig}px;
  font-weight: 600;
  line-height: 0.8;
  margin-bottom: 2px;

  ${mediaQueries.small} {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  margin-right: 10px;

  ${mediaQueries.small} {
    width: 100%;
    height: 100%;
    margin-top: -4px;
    display: block;
    margin-right: 0;
  }
`;

const isBrowser = typeof window !== "undefined";

const Header = () => {
  const displayCurrentLocation = location => {
    const currentLocation = location.replaceAll("/", "");
    if (currentLocation === "about") return "about us";
    return currentLocation;
  };

  const { closeMenu } = useContext(MenuContext);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, [setHasMounted]);

  if (!hasMounted) return null;

  return (
    <StyledHeader>
      <>
        <MenuIcon />
        <StyledLink to="/" onClick={closeMenu}>
          <Logo />
        </StyledLink>
        {isBrowser && (
          <CurrentLocation>
            {displayCurrentLocation(window.location.pathname)}
          </CurrentLocation>
        )}
      </>
    </StyledHeader>
  );
};

export default Header;
