import {
  violet,
  blackA,
  whiteA,
  gray,
  mauve,
  yellow,
  sky
} from '@radix-ui/colors';

const brand = {
  'brand-primary-01': violet.violet1,
  'brand-primary-03': violet.violet3,
  'brand-primary-09': violet.violet9,
  'brand-primary-11': violet.violet11
};

const text = {
  'text-contrast-high': mauve.mauve12,
  'text-contrast-low': gray.gray11,
  'text-black': blackA.blackA12,
  'text-white': whiteA.whiteA12
};

const accent = {
  'accent-yellow': yellow.yellow9,
  'accent-sky': sky.sky9,
  'accent-violet': violet.violet9
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
