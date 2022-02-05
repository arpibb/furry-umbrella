import React from 'react';
import {
  BandCampContainer,
  OuterReleaseWrapper,
  GeneralInfo,
  Title,
  Description,
  BuyingOptions,
  BuyVinyl,
  BuyDigital,
  ReleaseCarousel,
} from '../StyledComponents/Releases.styles';

import BuyingOption from './BuyingOption';
import CarouselControls from './CarouselControls';
import CarouselContent from './CarouselContent';
import ReleaseTrack from './ReleaseTrack';
import { motion, AnimatePresence } from 'framer-motion';
import { variants } from './ReleasesContentWeb';

const ReleasesContentMobile = ({ releaseData }) => {
  return (
    <OuterReleaseWrapper>
      {releaseData && (
        <ReleaseCarousel data={releaseData} freeContentMode={true}>
          {(currentItemIndex, handleClick) => {
            return (
              <>
                <CarouselControls
                  data={releaseData}
                  currentItemIndex={currentItemIndex}
                  handleClick={handleClick}
                />
                <AnimatePresence exitBeforeEnter variants={variants}>
                  <motion.div
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
                    </GeneralInfo>
                    <CarouselContent
                      data={releaseData}
                      currentItemIndex={currentItemIndex}
                    >
                      <BandCampContainer
                        contentEditable='true'
                        dangerouslySetInnerHTML={{
                          __html: releaseData[currentItemIndex]['embed'],
                        }}
                      ></BandCampContainer>
                    </CarouselContent>
                    {releaseData[currentItemIndex].sideAndTrack.map(
                      (track, idx) =>
                        track.name !== null && (
                          <ReleaseTrack track={track} key={idx} />
                        )
                    )}
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
                  </motion.div>
                </AnimatePresence>
              </>
            );
          }}
        </ReleaseCarousel>
      )}
    </OuterReleaseWrapper>
  );
};

export default ReleasesContentMobile;
