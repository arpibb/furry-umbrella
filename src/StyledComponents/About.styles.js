import styled from 'styled-components';
import { mediaQueries, fontSizes } from '../styles/variables';
import { easeInAnimation } from '../styles/GlobalStyles';
import { Title } from '../StyledComponents/Releases.styles';
import ArtistHoverImage from '../images/hoverImages/buying_options.png';

export const AboutUsContainer = styled.div`
  display: flex;
  margin-top: 6vh;
  padding-top: 5vh;
  overflow: scroll;
  margin-bottom: 8px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  -webkit-animation-name: ${easeInAnimation};
  -webkit-animation-duration: 0.5s;

  ${mediaQueries.medium} {
    width: 100%;
    flex-direction: column;

    -webkit-animation-duration: 2s;
  }
  ${mediaQueries.small} {
    margin-top: 32px;
  }
`;

export const PhotosContainer = styled.div`
  margin-left: 41px;
  position: relative;

  ${mediaQueries.medium} {
    margin-left: 0;
    max-width: 100%;
    align-self: center;
    order: 2;
  }
`;

export const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  margin-left: 50px;

  ${mediaQueries.desktop} {
    max-width: 300px;
    margin-left: 40px;
  }

  ${mediaQueries.medium} {
    margin: 0;
    max-width: 100%;
    order: 1;
  }
`;

export const Contact = styled.div`
  margin-top: 4vh;

  > p {
    font-family: 'neue-haas-grotesk-text';
    font-size: ${fontSizes.small}px;

    ${mediaQueries.small} {
      font-size: ${fontSizes.small}px;
    }
  }

  > p > a {
    text-decoration: none;
    color: white;
  }

  ${mediaQueries.small} {
    margin-top: 24px;
  }
`;

export const Description = styled.p`
  margin-top: 4vh;

  font-family: 'neue-haas-grotesk-text';
  font-size: 18px;
  ${mediaQueries.small} {
    margin-top: 36px;
  }
`;

export const ListOfArtists = styled.ul`
  margin: 0;
  margin-top: 4vh;
  list-style-type: none;

  ${mediaQueries.small} {
    margin-top: 36px;
  }

  > li {
    font-family: 'neue-haas-grotesk-display';
    font-size: ${fontSizes.xBig}px;
    margin: 0;

    position: relative;
    &:hover {
      &:before {
        position: absolute;
        content: '';
        background-image: url(${ArtistHoverImage});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center top;
        background-origin: padding-box;
        pointer-events: none;
        width: 110%;
        height: 100%;
      }
    }

    ${mediaQueries.small} {
      font-size: ${fontSizes.medium}px;
    }

    ${mediaQueries.medium} {
      font-size: ${fontSizes.big}px;
    }
  }

  > li > a {
    text-decoration: none;
    color: white;
  }
`;

export const GroupPhoto = styled.img`
  width: 400px;
  height: auto;
  max-width: 500px;

  ${mediaQueries.desktop} {
    width: 400px;
    width: 35vw;
  }

  ${mediaQueries.medium} {
    width: 100%;
    height: auto;
  }

  ${mediaQueries.medium} {
    margin-top: 36px;
  }
`;

export const AboutUsTitle = styled(Title)`
  ${mediaQueries.small} {
    margin-top: 0;
    padding-top: 0;
  }
`;
