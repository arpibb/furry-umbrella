import React, { useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Header from "./header";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import { useWindowSize } from "../lib/useWindowSize";
import { mediaQueries, screenSizes } from "../styles/variables";
import { MenuContext } from "../context/menuContext";

import "./layout.css";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 100%;
`;

const StyledMain = styled.main`
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0;
  height: 100%;

  ${mediaQueries.small} {
    overflow: visible;
    height: auto;

    ${props => {
      if (props.isMenuOpen) {
        return `position: absolute !important;
        top: -9999px !important;
        left: -9999px !important;`;
      }
    }}
  }
`;

const OverlayContainer = styled.div`
  overflow-y: hidden;

  &::before {
    background-color: black;
    position: fixed;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
  ${mediaQueries.small} {
    height: 100%;
  }
`;

const Layout = ({ children }) => {
  const { width } = useWindowSize();
  const isSmallScreen = width <= screenSizes.phone;

  const { isMenuOpen } = useContext(MenuContext);

  return (
    <StyledContainer>
      <Header />
      {isMenuOpen && (
        <OverlayContainer>
          <Menu />
        </OverlayContainer>
      )}
      <StyledMain isMenuOpen={isMenuOpen}>{children}</StyledMain>
      {!isSmallScreen && <Sidebar />}
    </StyledContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
