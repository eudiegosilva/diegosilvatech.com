import {
  violetDark,
  blackA,
  whiteA,
  grayDark,
  mauveDark,
  yellowDark,
  skyDark
} from '@radix-ui/colors';

const brand = {
  'brand-primary-01': violetDark.violet1,
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
  'transparent-black-12': blackA.blackA12,
  'transparent-white-01': whiteA.whiteA1,
  'transparent-white-03': whiteA.whiteA3
};

const palette = {
  ...brand,
  ...text,
  ...transparent,
  ...accent
};

export { palette };
