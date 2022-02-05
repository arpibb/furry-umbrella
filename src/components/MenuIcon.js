import React, { useRef, useContext } from "react";
import styled from "styled-components";
import MenuIconImage from "../images/menu_icon.svg";
import { mediaQueries } from "../styles/variables";
import { MenuContext } from "../context/menuContext";

const StyledContainer = styled.div`
  cursor: pointer;
  width: 35px;
  height: 22.5px;
  margin-right: 10px;
  margin-top: -3px;

  ${mediaQueries.small} {
    width: 50px;
    height: auto;
    margin-right: 23px;
    margin-top: -0.8vw;
  }
`;

const StyledMenuIcon = styled(MenuIconImage)`
  width: 100%;
  height: 100%;
`;

const MenuIcon = () => {
  const menuIconRef = useRef(null);

  const { isMenuOpen, openMenu, closeMenu } = useContext(MenuContext);

  return (
    <StyledContainer
      ref={menuIconRef}
      onClick={() => (isMenuOpen ? closeMenu() : openMenu())}
      onMouseEnter={() =>
        menuIconRef.current.classList.add("menu-button-hover")
      }
      onMouseLeave={() =>
        menuIconRef.current.classList.remove("menu-button-hover")
      }
    >
      <StyledMenuIcon />
    </StyledContainer>
  );
};

export default MenuIcon;
