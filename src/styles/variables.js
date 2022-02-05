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
  small: 480,
  medium: 768,
  desktop: 1024,
  wideScreen: 1600,
};

export const mediaQueries = {
  small: `@media only screen and (max-width: ${screenSizes.small}px)`,
  medium: `@media only screen and (max-width: ${screenSizes.medium}px)`,
  desktop: `@media only screen and (max-width: ${screenSizes.desktop}px)`,
  wideScreen: `@media only screen and (min-width: ${screenSizes.wideScreen}px)`,
};
