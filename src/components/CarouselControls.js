import React, { useRef } from 'react';
import styled from 'styled-components';
import { mediaQueries, fontSizes } from '../styles/variables';

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    position: relative;
  }

  & > div > * {
    font-family: 'neue-haas-grotesk-display';
    font-size: ${fontSizes.xBig}px;
    line-height: ${fontSizes.large}px;
    color: white;
    padding: 0;

    ${mediaQueries.small} {
      font-size: ${fontSizes.xBig}px;
      line-height: ${fontSizes.large}px;
    }
  }

  & > div > button {
    background-color: black;
    border: none;
    cursor: pointer;
    font-weight: 300;

    &:nth-child(1) {
      padding-right: 20px;

      ${mediaQueries.small} {
        padding: 0;
      }
    }
  }
`;

const CarouselControls = ({ data, currentItemIndex, handleClick }) => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <ControlsContainer>
      <div>
        <button
          ref={prevRef}
          name='left'
          type='button'
          onClick={(e) => handleClick(e)}
          onMouseEnter={() => prevRef.current.classList.add('prev-hover')}
          onMouseLeave={() => prevRef.current.classList.remove('prev-hover')}
        >
          PREV
        </button>
      </div>
      <div>
        <p>{`${currentItemIndex + 1}/${data.length}`}</p>
      </div>
      <div>
        <button
          ref={nextRef}
          name='right'
          type='button'
          onClick={(e) => handleClick(e)}
          onMouseEnter={() => nextRef.current.classList.add('next-hover')}
          onMouseLeave={() => nextRef.current.classList.remove('next-hover')}
        >
          NEXT
        </button>
      </div>
    </ControlsContainer>
  );
};

export default CarouselControls;
