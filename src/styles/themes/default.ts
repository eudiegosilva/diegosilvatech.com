import {
  border,
  color,
  font,
  spacing,
  transition,
  util,
  zIndex,
  media,
  size
} from '../tokens';

export const defaultTheme = {
  theme: {
    borderStyles: {},
    borderWidths: {},
    colors: { ...color.crimsonPalette },
    fonts: { ...font.family },
    fontSizes: { ...font.size },
    fontWeights: { ...font.weight },
    letterSpacings: { ...font.letterSpacing },
    lineHeights: { ...font.lineHeight },
    radii: { ...border.radius },
    shadows: {},
    sizes: { ...size },
    space: { ...spacing },
    transitions: { ...transition },
    zIndices: { ...zIndex }
  },
  utils: { ...util },
  media: { ...media }
};
