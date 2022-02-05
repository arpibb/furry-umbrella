import React, { useState } from 'react';
import styled from 'styled-components';
import CarouselContent from './CarouselContent';
import { easeInAnimation } from '../styles/GlobalStyles';

const StyledContainer = styled.div`
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 63vw;

  -webkit-animation-name: ${easeInAnimation};
  -webkit-animation-duration: 0.5s;

  & > * {
    color: white;
  }
`;

const Carousel = ({ data, children, freeContentMode, className }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handleClick = (e) => {
    const buttonClicked = e.target.name;
    if (buttonClicked === 'left' && currentItemIndex - 1 >= 0) {
      setCurrentItemIndex((currentItemIndex) => currentItemIndex - 1);
    }
    if (buttonClicked === 'right' && currentItemIndex + 1 <= data.length - 1) {
      setCurrentItemIndex((currentItemIndex) => currentItemIndex + 1);
    }
  };

  return (
    <StyledContainer className={className}>
      {freeContentMode ? (
        children(currentItemIndex, handleClick)
      ) : (
        <>
          <CarouselContent data={data}>
            {children(currentItemIndex, handleClick)}
          </CarouselContent>
        </>
      )}
    </StyledContainer>
  );
};

export default Carousel;
