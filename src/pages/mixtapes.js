import React, { useRef } from 'react';
import { graphql } from 'gatsby';

import Carousel from '../components/Carousel';
import styled from 'styled-components';
import { mediaQueries, fontSizes } from '../styles/variables';
import { easeInAnimation } from '../styles/GlobalStyles';
import CarouselControls from '../components/CarouselControls';
import { useWindowSize } from '../lib/useWindowSize';
import { screenSizes } from '../styles/variables';
import { Title } from '../StyledComponents/Releases.styles';

import SEO from '../components/seo';

const MixtapesCarousel = styled(Carousel)`
  ${mediaQueries.desktop} {
    width: 65vw;
  }
  ${mediaQueries.medium} {
    width: 100%;
  }
  ${mediaQueries.small} {
    margin-top: 0;
  }
`;

const MixtapesContainer = styled.div`
  position: relative;
  margin-top: 80px;
  height: 100%;

  -webkit-animation-name: ${easeInAnimation};
  -webkit-animation-duration: 0.5s;

  ${mediaQueries.small} {
    margin-top: 0;
    -webkit-animation-duration: 2s;
  }
`;

const StyledParagraph = styled.p`
  font-family: 'neue-haas-grotesk-text';
  font-size: ${fontSizes.small}px;
  font-weight: 100;

  ${mediaQueries.small} {
    font-size: ${fontSizes.medium}px;
  }
`;

const SoundCloudContainer = styled.div`
  height: 37.5vh;
  margin-top: 36px;
  padding-right: 20px;

  ${mediaQueries.medium} {
    padding-right: 0;
  }
`;

const Description = styled.p`
  font-family: 'neue-haas-grotesk-text';
  font-size: ${fontSizes.small}px;
  margin-top: 40px;
`;

const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  ${mediaQueries.small} {
    position: static;
  }
`;

const editHeightParam = (currentItem) => {
  const regex = new RegExp('height="[0-9]+"');
  return currentItem.replace(regex, `height="100%"`);
};

const Mixtapes = ({ data }) => {
  const mixtapesData = data.allFile.edges;
  const divRef = useRef(null);

  const { width } = useWindowSize();
  const isSmallScreen = width <= screenSizes.phone;

  const areControlsVisible = mixtapesData.length > 1;

  return (
    <>
      <SEO title='SPANDAU20 Mixtapes' />
      <MixtapesCarousel data={mixtapesData}>
        {(currentItemIndex) => {
          const currentMixtape =
            mixtapesData &&
            mixtapesData[currentItemIndex].node.childMarkdownRemark.frontmatter;
          return (
            <MixtapesContainer ref={divRef}>
              {isSmallScreen && areControlsVisible && (
                <ControlsContainer>
                  <CarouselControls
                    data={mixtapesData}
                    currentItemIndex={currentItemIndex}
                  />
                </ControlsContainer>
              )}
              <Title>{currentMixtape.title}</Title>
              <StyledParagraph>by {currentMixtape.byLine}</StyledParagraph>
              <SoundCloudContainer
                contentEditable='true'
                dangerouslySetInnerHTML={{
                  __html: editHeightParam(currentMixtape.embed),
                }}
                onMouseEnter={() => {
                  document.body.classList.add('play-button-hover');
                  divRef.current.classList.add('listen-here-hover');
                }}
                onMouseLeave={() => {
                  document.body.classList.remove('play-button-hover');
                  divRef.current.classList.remove('listen-here-hover');
                }}
              ></SoundCloudContainer>
              <Description>{currentMixtape.description}</Description>
              {!isSmallScreen && areControlsVisible && (
                <ControlsContainer>
                  <CarouselControls
                    data={mixtapesData}
                    currentItemIndex={currentItemIndex}
                  />
                </ControlsContainer>
              )}
            </MixtapesContainer>
          );
        }}
      </MixtapesCarousel>
    </>
  );
};

export default Mixtapes;

export const query = graphql`
  query MixtapesQuery {
    allFile(filter: { sourceInstanceName: { eq: "mixtapes" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              embed
              title
              byLine
              description
            }
          }
        }
      }
    }
  }
`;
