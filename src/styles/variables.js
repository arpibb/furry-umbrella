export const fontSizes = {
  xSmall: 8,
  small: 12,
  base: 16,
  medium: 20,
  big: 24,
  xBig: 27,
  large: 32,
  xLarge: 40,
  xxLarge: 48,
  giant: 58,
};

export const lineHeights = {
  small: 12,
  base: 20,
  big: 28,
  large: 36,
  xLarge: 40,
  xxLarge: 48,
};

export const screenSizes = {
  phone: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1600,
};

const small = 480;
const medium = 768;
const desktop = 1024;
const wideScreen = 1600;

export const mediaQueries = {
  small: `@media only screen and (max-width: ${small}px)`,
  medium: `@media only screen and (max-width: ${medium}px)`,
  desktop: `@media only screen and (max-width: ${desktop}px)`,
  wideScreen: `@media only screen and (min-width: ${wideScreen}px)`,
};
