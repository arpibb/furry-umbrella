import styled from 'styled-components';
import { mediaQueries, fontSizes } from '../styles/variables';
import { easeInAnimation } from '../styles/GlobalStyles';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import BuyingOptionHoverImage from '../images/hoverImages/buying_options.png';

export const ReleaseCarousel = styled(Carousel)`
  ${mediaQueries.desktop} {
    width: 100%;
  }

  ${mediaQueries.medium} {
    width: 425px;
    height: 425px;
    margin-top: 6vh;
  }

  ${mediaQueries.small} {
    max-width: 100%;
    width: 100%;
    height: auto;
    flex-direction: column;
    padding-bottom: 20px;
    margin-top: 0;
  }
`;

// max-height is 680 because for the next button the hover image requires an extra 20px padding
// thus we can't afford the bandcamp embed to be 700 only 680 both width and height.

export const BandCampContainer = styled(motion.div)`
  width: 59vh;
  height: calc(59vh - 20px);

  max-width: 700px;
  max-height: 680px;

  padding: 0 20px 0 0;

  ${mediaQueries.desktop} {
    width: 40vw;
    height: calc(40vw - 20px);
  }

  ${mediaQueries.medium} {
    width: 425px;
    height: 405px;
    margin-top: 6vh;
  }

  ${mediaQueries.small} {
    width: 100%;
    height: calc(100vw - 40px);
    margin: 28px 0;
    padding: 0;
  }
`;

export const OuterReleaseWrapper = styled.div`
  display: flex;
  height: 100%;
  margin-top: 11vh;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  -webkit-animation-name: ${easeInAnimation};
  -webkit-animation-duration: 2s;

  ${mediaQueries.medium} {
    width: 425px;
    overflow: scroll;
    margin: 0 auto;
    margin-top: 5vh;
  }

  ${mediaQueries.small} {
    width: 100%;
    margin-top: 2.5vw;
    flex-direction: column;
    overflow: hidden;
    margin: 0;
  }
`;

export const InnerReleaseWrapper = styled.div`
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  max-width: 700px;

  ${mediaQueries.medium} {
    margin-top: 6vh;
  }
`;

export const ReleaseInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 33vw;
  height: 100%;
  margin-left: calc(5vw - 20px);

  ${mediaQueries.small} {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
  }
`;

export const GeneralInfo = styled.div``;

export const Title = styled.h2`
  font-family: 'neue-haas-grotesk-display';
  font-size: ${fontSizes.xBig}px;
  line-height: 0.8;
  text-transform: uppercase;

  ${mediaQueries.medium} {
    margin-top: 5vh;
  }

  ${mediaQueries.small} {
    font-size: ${fontSizes.large}px;
    margin-top: 16vw;
  }
`;

export const Description = styled.p`
  font-family: 'neue-haas-grotesk-text';
  font-size: ${fontSizes.small}px;
  margin: 4vh 0;
  max-width: 420px;

  ${mediaQueries.small} {
    font-size: ${fontSizes.small}px;
    margin-top: 4vh;
    margin-bottom: 1.8vh;
  }
`;

export const BuyingOptions = styled.div`
  flex-shrink: 1;

  ${mediaQueries.medium} {
    margin-top: 6vh;
  }
`;

const Buying = styled.p`
  font-family: 'neue-haas-grotesk-display';
  font-size: ${fontSizes.xBig}px;
  line-height: ${fontSizes.large}px;

  > span {
    position: relative;
    > a {
      font-family: 'neue-haas-grotesk-display';
      font-size: ${fontSizes.xBig}px;
      outline: none;
      color: white;
      text-decoration-thickness: 1px;
      text-underline-offset: 4px;

      &:hover {
        &:before {
          position: absolute;
          content: '';
          background-image: url(${BuyingOptionHoverImage});
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center top;
          background-origin: padding-box;
          pointer-events: none;
          width: 105%;
          height: 100%;
        }
      }
    }
  }
`;

export const BuyVinyl = styled(Buying)`
  ${mediaQueries.small} {
    width: 100%;
    margin-top: 36px;
  }
`;

export const BuyDigital = styled(Buying)`
  margin-top: 8px;
  margin-bottom: 1px;

  ${mediaQueries.small} {
    margin-top: 16px;
  }
`;
