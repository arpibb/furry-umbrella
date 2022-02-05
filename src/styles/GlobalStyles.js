import { keyframes, createGlobalStyle } from "styled-components";

export const easeInAnimation = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

export const easeOutAnimation = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0 }
`;

const neueHaasGroteskDisplayUrlNormalWoff2 =
  "https://use.typekit.net/af/2807c7/00000000000000007735bb48/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3";
const neueHaasGroteskDisplayUrlNormalWoff =
  "https://use.typekit.net/af/2807c7/00000000000000007735bb48/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3";
const neueHaasGroteskDisplayUrlNormalOpenType =
  "https://use.typekit.net/af/2807c7/00000000000000007735bb48/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3";

const neueHaasGroteskDisplayUrlBoldWoff2 =
  "https://use.typekit.net/af/153042/00000000000000007735bb62/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3";
const neueHaasGroteskDisplayUrlBoldWoff =
  "https://use.typekit.net/af/153042/00000000000000007735bb62/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3";
const neueHaasGroteskDisplayUrlBoldOpenType =
  "https://use.typekit.net/af/153042/00000000000000007735bb62/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "neue-haas-grotesk-display";
    src:url(${neueHaasGroteskDisplayUrlNormalWoff2}) format("woff2"),
        url(${neueHaasGroteskDisplayUrlNormalWoff}) format("woff"),
        url(${neueHaasGroteskDisplayUrlNormalOpenType}) format("opentype");
    font-display:auto;
    font-style:normal;
    font-weight:400;
  }
  @font-face {
    font-family: "neue-haas-grotesk-display";
    src:url(${neueHaasGroteskDisplayUrlBoldWoff2}) format("woff2"),
        url(${neueHaasGroteskDisplayUrlBoldWoff}) format("woff"),
        url(${neueHaasGroteskDisplayUrlBoldOpenType}) format("opentype");
    font-display:auto;
    font-style:normal;
    font-weight:600;
  }
`;
