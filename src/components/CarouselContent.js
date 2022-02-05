import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../styles/variables";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${mediaQueries.small} {
    max-width: 100%;
  }
`;

const CarouselContent = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default CarouselContent;
