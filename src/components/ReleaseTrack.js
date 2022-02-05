import React from "react";
import styled from "styled-components";
import { mediaQueries, fontSizes } from "../styles/variables";
import TrackHover from "../images/hoverImages/next.png";

const ReleaseTrack = ({ track }) => {
  return (
    <Track>
      <a href={track.link}>
        <p>
          {track.name} - {track.titleOfTrack}
        </p>
      </a>
    </Track>
  );
};

const Track = styled.div`
  font-family: "neue-haas-grotesk-text";
  margin-top: 1.8vh;
  font-size: 18px;
  width: fit-content;

  > a {
    text-decoration: none;
    color: white;

    > p {
      font-size: 18px;
      width: fit-content;

      position: relative;
      &:hover {
        &:before {
          position: absolute;
          content: "";
          background-image: url(${TrackHover});
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center top;
          background-origin: padding-box;
          pointer-events: none;
          width: 110%;
          height: 120%;
        }
      }

      ${mediaQueries.small} {
        font-size: ${fontSizes.big}px;
      }
    }
  }

  ${mediaQueries.small} {
    font-size: ${fontSizes.big}px;
  }
`;

export default ReleaseTrack;
