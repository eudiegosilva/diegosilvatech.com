import {
  crimsonDark,
  violetDark,
  blackA,
  whiteA,
  grayDark,
  mauveDark,
  yellowDark,
  skyDark
} from '@radix-ui/colors';

const brand = {
  'brand-primary-01': crimsonDark.crimson1,
  'brand-primary-03': crimsonDark.crimson3,
  'brand-primary-09': crimsonDark.crimson9,
  'brand-primary-11': crimsonDark.crimson11
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
