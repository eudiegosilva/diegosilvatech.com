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
  'brand-primary-02': violet.violet2,
  'brand-primary-03': violet.violet3,
  'brand-primary-04': violet.violet4,
  'brand-primary-05': violet.violet5,
  'brand-primary-06': violet.violet6,
  'brand-primary-07': violet.violet7,
  'brand-primary-08': violet.violet8,
  'brand-primary-09': violet.violet9,
  'brand-primary-10': violet.violet10,
  'brand-primary-11': violet.violet11,
  'brand-primary-12': violet.violet12
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
