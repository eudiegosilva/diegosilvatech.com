import {
  border,
  color,
  font,
  spacing,
  transition,
  util,
  zIndex
} from '../../styles/tokens';

export const defaultTheme = {
  theme: {
    borderStyles: {},
    borderWidths: {},
    colors: {
      ...color.palette
    },
    fonts: { ...font.family },
    fontSizes: { ...font.size },
    fontWeights: { ...font.weight },
    letterSpacings: { ...font.letterSpacing },
    lineHeights: { ...font.lineHeight },
    radii: { ...border.radius },
    shadows: {},
    sizes: {},
    space: { ...spacing },
    transitions: { ...transition },
    zIndices: { ...zIndex }
  },
  utils: { ...util },
  media: {
    bp1: '(min-width: 425px)',
    bp2: '(min-width: 760px)',
    bp3: '(max-width: 780px)',
    bp4: '(max-width: 1024px)'
  }
};
