import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

import { crimson, violet, defaultTheme } from './themes';

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

export const crimsonTheme = createTheme({
  colors: crimson.theme.colors
});

export const violetTheme = createTheme({
  colors: violet.theme.colors
});
