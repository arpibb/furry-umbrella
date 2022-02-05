import React from 'react';
import {
  BandCampContainer,
  OuterReleaseWrapper,
  ReleaseInfo,
  GeneralInfo,
  Title,
  Description,
  BuyingOptions,
  BuyVinyl,
  BuyDigital,
  InnerReleaseWrapper,
  ReleaseCarousel,
} from '../StyledComponents/Releases.styles';
import ReleaseTrack from './ReleaseTrack';
import BuyingOption from './BuyingOption';

import CarouselContent from './CarouselContent';
import CarouselControls from './CarouselControls';

import { AnimatePresence } from 'framer-motion';

export const variants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const ReleasesContentWeb = ({ releaseData }) => {
  return (
    <>
      {releaseData && (
        <ReleaseCarousel data={releaseData} freeContentMode={true}>
          {(currentItemIndex, handleClick) => (
            <OuterReleaseWrapper>
              <InnerReleaseWrapper>
                <CarouselContent
                  data={releaseData}
                  currentItemIndex={currentItemIndex}
                  handleClick={handleClick}
                >
                  <AnimatePresence exitBeforeEnter variants={variants}>
                    <BandCampContainer
                      key={currentItemIndex}
                      variants={variants}
                      initial='initial'
                      animate='animate'
                      exit='exit'
                      contentEditable='true'
                      dangerouslySetInnerHTML={{
                        __html: releaseData[currentItemIndex]['embed'],
                      }}
                    ></BandCampContainer>
                  </AnimatePresence>
                </CarouselContent>
                <CarouselControls
                  data={releaseData}
                  currentItemIndex={currentItemIndex}
                  handleClick={handleClick}
                />
              </InnerReleaseWrapper>
              <AnimatePresence exitBeforeEnter variants={variants}>
                <ReleaseInfo
                  key={currentItemIndex}
                  variants={variants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                >
                  <GeneralInfo>
                    <Title>{releaseData[currentItemIndex].title}</Title>
                    <Description>
                      {releaseData[currentItemIndex].description}
                    </Description>
                    {releaseData[currentItemIndex].sideAndTrack.map(
                      (track, idx) =>
                        track.name !== null && (
                          <ReleaseTrack track={track} key={idx} />
                        )
                    )}
                  </GeneralInfo>
                  <BuyingOptions>
                    <BuyVinyl>
                      BUY VINYL:{' '}
                      {releaseData[currentItemIndex].vinylBuyingOptions.map(
                        (option, index) => (
                          <BuyingOption
                            key={index}
                            index={index}
                            option={option}
                            releaseData={releaseData}
                            currentItemIndex={currentItemIndex}
                            buyingOption={'vinylBuyingOptions'}
                          />
                        )
                      )}{' '}
                    </BuyVinyl>
                    <BuyDigital>
                      BUY DIGITAL:{' '}
                      {releaseData[currentItemIndex].digitalBuyingOptions.map(
                        (option, index) => (
                          <BuyingOption
                            key={index}
                            index={index}
                            option={option}
                            releaseData={releaseData}
                            currentItemIndex={currentItemIndex}
                            buyingOption={'digitalBuyingOptions'}
                          />
                        )
                      )}{' '}
                    </BuyDigital>
                  </BuyingOptions>
                </ReleaseInfo>
              </AnimatePresence>
            </OuterReleaseWrapper>
          )}
        </ReleaseCarousel>
      )}
    </>
  );
};

export default ReleasesContentWeb;
