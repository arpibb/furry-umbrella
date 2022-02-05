import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import spaceStationGif from '../images/animated_spacestation.gif';
import { mediaQueries, screenSizes } from '../styles/variables';
import { easeInAnimation } from '../styles/GlobalStyles';
import { useWindowSize } from '../lib/useWindowSize';
import { MenuContext } from '../context/menuContext';

const StyledSideBar = styled.div`
  display: flex;
  align-items: flex-start;
  color: white;
  z-index: 1000;

  position: absolute;
  transform-origin: top right;
  transform: rotate(90deg) translate(100%, 0);

  -webkit-animation-name: ${easeInAnimation};
  -webkit-animation-duration: 1s;
  top: 40px;
  right: 40px;
  justify-content: space-between;
  width: calc(100vh - 40px);
  max-width: ${({ height }) => height - 40}px;

  ${mediaQueries.medium} {
    display: none;
  }

  ${mediaQueries.small} {
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 0;
    transform: none;
    margin: 0 15px 15px 15px;
    z-index: 99;
    width: auto;
    top: 0px;
    right: 0px;
  }
`;

const StyledParagraph = styled.p`
  font-family: 'neue-haas-grotesk-text';
  font-size: 10px;
  max-width: 39vh;
  &:nth-child(1) {
    max-width: 36vh;
  }
  color: white;

  ${mediaQueries.small} {
    font-size: 14px;
    width: 100%;
    max-width: 100%;
    &:first-child {
      max-width: 100%;
      margin-bottom: 16px;
    }
    &:nth-child(2n) {
      display: none;
    }
  }

  > a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledSpaceStation = styled.div`
  width: 90.75px;
  height: auto;
  transform: rotate(-90deg);
  margin-left: 2vh;
  margin-bottom: 1vh;
  margin-top: -1vh;
  display: block;

  ${mediaQueries.wideScreen} {
    margin-left: 4vh;
  }

  ${mediaQueries.small} {
    display: none;
  }
`;

const Sidebar = () => {
  const { width, height } = useWindowSize();
  const isSmallScreen = width <= screenSizes.small;
  const [hasMounted, setHasMounted] = useState(false);
  const { closeMenu } = useContext(MenuContext);

  useEffect(() => {
    setHasMounted(true);
  }, [setHasMounted]);

  if (!hasMounted) return null;

  return (
    <>
      {hasMounted && (
        <StyledSideBar height={height}>
          <StyledParagraph>
            All rights reserved. Spandau20 and the website is under copyright.
            All the information on this website is published in good faith and
            for general information purpose only. By using our website, you
            hereby consent to our disclaimer and agree to its terms.
          </StyledParagraph>
          <StyledParagraph>
            <Link to='/imprint' onClick={closeMenu}>
              IMPRESSUM
            </Link>{' '}
            ANGABEN GEMÄSS § 5 TMGRöbig & Wagner Label GbR Brückenstraße 1 10179
            Berlin Vertreten durch: Aaron Röbig, Felix Wagner KONTAKT Telefon:
            01573166131 E-Mail: label@spandau20.com
          </StyledParagraph>
          {!isSmallScreen && (
            <Link to={'/'} onClick={closeMenu}>
              <StyledSpaceStation>
                <img
                  src={spaceStationGif}
                  style={{ width: 90.75, height: 'auto' }}
                  alt='Rotating space station GIF'
                />
              </StyledSpaceStation>
            </Link>
          )}
        </StyledSideBar>
      )}
    </>
  );
};

export default Sidebar;
