import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

import { defaultTheme, dark, light } from './themes';

export type ConfigProps = Stitches.CSS<typeof config>;

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
} = createStitches({
  theme: { ...defaultTheme.theme },
  utils: { ...defaultTheme.utils },
  media: { ...defaultTheme.media }
});

export const darkTheme = createTheme({
  colors: dark.theme.colors
});
export const lightTheme = createTheme({
  colors: light.theme.colors
});
