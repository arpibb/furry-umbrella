import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { easeInAnimation } from '../styles/GlobalStyles';

import SEO from '../components/seo';
import Scene from '../components/Scene';
import { useWindowSize } from '../lib/useWindowSize';
import Sidebar from '../components/Sidebar';
import { mediaQueries } from '../styles/variables';

const StyledImprintContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;

  ${mediaQueries.isSmallScreen} {
    -webkit-animation-name: ${easeInAnimation};
    -webkit-animation-duration: 1s;
  }
`;

const IndexPage = () => {
  const { width } = useWindowSize();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, [setHasMounted]);

  if (!hasMounted) return null;

  const isSmallScreen = width <= 480;
  return (
    <>
      <SEO title='SPDANDAU20 Home page' />
      <Scene />
      {hasMounted && isSmallScreen && (
        <StyledImprintContainer>
          <Sidebar />
        </StyledImprintContainer>
      )}
    </>
  );
};

export default IndexPage;
