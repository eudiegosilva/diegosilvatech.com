import {
  violetDark,
  blackA,
  whiteA,
  grayDark,
  mauveDark,
  yellowDark,
  skyDark
} from '@radix-ui/colors';
import { darken } from 'polished';

const brand = {
  'brand-primary-01': darken(0.05, violetDark.violet1),
  'brand-primary-02': violetDark.violet2,
  'brand-primary-03': violetDark.violet3,
  'brand-primary-04': violetDark.violet4,
  'brand-primary-05': violetDark.violet5,
  'brand-primary-06': violetDark.violet6,
  'brand-primary-07': violetDark.violet7,
  'brand-primary-08': violetDark.violet8,
  'brand-primary-09': violetDark.violet9,
  'brand-primary-10': violetDark.violet10,
  'brand-primary-11': violetDark.violet11,
  'brand-primary-12': violetDark.violet12
};

const text = {
  'text-contrast-high': mauveDark.mauve12,
  'text-contrast-low': grayDark.gray11,
  'text-black': blackA.blackA12,
  'text-white': whiteA.whiteA12
};

const accent = {
  'accent-yellow': yellowDark.yellow9,
  'accent-sky': skyDark.sky9,
  'accent-violet': violetDark.violet9
};

const transparent = {
  'transparent-black-01': blackA.blackA1,
  'transparent-black-02': blackA.blackA2,
  'transparent-black-03': blackA.blackA3,
  'transparent-black-04': blackA.blackA4,
  'transparent-black-05': blackA.blackA5,
  'transparent-black-06': blackA.blackA6,
  'transparent-black-07': blackA.blackA7,
  'transparent-black-08': blackA.blackA8,
  'transparent-black-09': blackA.blackA9,
  'transparent-black-10': blackA.blackA10,
  'transparent-black-11': blackA.blackA11,
  'transparent-black-12': blackA.blackA12,

  'transparent-white-01': whiteA.whiteA1,
  'transparent-white-02': whiteA.whiteA2,
  'transparent-white-03': whiteA.whiteA3,
  'transparent-white-04': whiteA.whiteA4,
  'transparent-white-05': whiteA.whiteA5,
  'transparent-white-06': whiteA.whiteA6,
  'transparent-white-07': whiteA.whiteA7,
  'transparent-white-08': whiteA.whiteA8,
  'transparent-white-09': whiteA.whiteA9,
  'transparent-white-10': whiteA.whiteA10,
  'transparent-white-11': whiteA.whiteA11,
  'transparent-white-12': whiteA.whiteA12
};

const palette = {
  ...brand,
  ...text,
  ...transparent,
  ...accent
};

export { palette };
