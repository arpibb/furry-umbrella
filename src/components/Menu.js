import React, { useRef, useContext, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useWindowSize } from '../lib/useWindowSize';
import { mediaQueries, fontSizes, screenSizes } from '../styles/variables';
import { easeInAnimation } from '../styles/GlobalStyles';
import { MenuContext } from '../context/menuContext';

const StyledMenu = styled.div`
  position: absolute;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  margin-top: 4vh;

  -webkit-animation-name: ${easeInAnimation};
  -webkit-animation-duration: 0.5s;

  ${mediaQueries.small} {
    height: 82.5%;
    justify-content: flex-end;
    margin-top: 0;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }

  & > * {
    font-size: 21.5vh;
    line-height: 17.3vh;
    margin: 1.75vh 0;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-family: 'neue-haas-grotesk-display';
    font-weight: 900;
    letter-spacing: 15px;
    display: inline-block;
    overflow: hidden;

    ${mediaQueries.desktop} {
      font-size: 14vw;
      line-height: 11.65vw;
      letter-spacing: 3px;
    }

    ${mediaQueries.small} {
      font-size: 16.5vw;
      line-height: 13vw;
      letter-spacing: 3px;
    }
  }
`;

const SmallLinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px 0 10px;

  & > * {
    color: white;
    font-family: 'neue-haas-grotesk-text';
    display: block;
    font-size: ${fontSizes.small}px;
    line-height: ${fontSizes.small}px;
    text-decoration: none;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;

const Menu = () => {
  const { width } = useWindowSize();
  const isSmallScreen = width <= screenSizes.small;
  const menuRef = useRef(null);
  const { closeMenu, isMenuOpen } = useContext(MenuContext);

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (isMenuOpen && e.target.className.includes('OverlayContainer')) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <StyledMenu ref={menuRef}>
      <Link
        to='/about'
        onClick={closeMenu}
        onMouseEnter={() =>
          menuRef.current.classList.add('menu-about-us-hover')
        }
        onMouseLeave={() =>
          menuRef.current.classList.remove('menu-about-us-hover')
        }
      >
        about us
      </Link>
      <Link
        to='/mixtapes'
        onClick={closeMenu}
        onMouseEnter={() =>
          menuRef.current.classList.add('menu-mixtapes-hover')
        }
        onMouseLeave={() =>
          menuRef.current.classList.remove('menu-mixtapes-hover')
        }
      >
        mixtapes
      </Link>
      <Link
        to='/releases'
        onClick={closeMenu}
        onMouseEnter={() =>
          menuRef.current.classList.add('menu-releases-hover')
        }
        onMouseLeave={() =>
          menuRef.current.classList.remove('menu-releases-hover')
        }
      >
        releases
      </Link>
      <a
        href='https://shop.spandau20.com/merch'
        onMouseEnter={() => menuRef.current.classList.add('menu-webshop-hover')}
        onMouseLeave={() =>
          menuRef.current.classList.remove('menu-webshop-hover')
        }
      >
        webshop
      </a>
      {isSmallScreen && (
        <SmallLinkContainer>
          <Link to='/' onClick={closeMenu}>
            SPACE STATION
          </Link>
          <Link to='/imprint' onClick={closeMenu}>
            IMPRINT
          </Link>
        </SmallLinkContainer>
      )}
    </StyledMenu>
  );
};

export default Menu;
