import React, { useRef } from 'react';
import styled from 'styled-components';
import { screenSizes } from '../styles/variables';
import { useWindowSize } from '../lib/useWindowSize';

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  iframe {
    border: none;
  }
`;

const Scene = () => {
  const { width } = useWindowSize();
  const isSmallScreen = width <= screenSizes.small;
  const phoneIframeRef = useRef(null);

  return (
    <div className={'scene-container'}>
      {isSmallScreen ? (
        <iframe
          id={'phoneIframe'}
          ref={phoneIframeRef}
          title='3d-model'
          width='100%'
          src='/assets/spaceStationMobile/210903_Newspacestation_Mobile.html'
          style={{ visibility: 'hidden' }}
          onLoad={() =>
            (document.getElementById('phoneIframe').style.visibility =
              'visible')
          }
        />
      ) : (
        <iframe
          title='3d-model'
          width='100%'
          src='/assets/NEW_DESKTOP_SPACESTATION/NEW_DESKTOP_SPACESTATION.html'
        />
      )}
    </div>
  );
};

export default Scene;
