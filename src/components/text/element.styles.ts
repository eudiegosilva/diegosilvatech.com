import { ConfigProps } from 'styles/stitches.config';

export const p: ConfigProps = {
  fontFamily: '$body',
  margin: '$lg 0',
  color: '$text-secondary',
  marginBottom: '$lg',
  lineHeight: '$170'
};

export const strong: ConfigProps = {
  fontFamily: '$body',
  color: '$text-primary',
  fontWeight: '$500'
};

export const h1: ConfigProps = {
  fontFamily: '$heading',
  fontSize: '$4x',
  lineHeight: '$115',
  margin: '0 0 $lg',
  color: '$text-primary'
};

export const h2: ConfigProps = {
  fontFamily: '$heading',
  fontSize: '$xl',
  color: '$text-primary'
};

export const h3: ConfigProps = {
  color: '$text-primary',
  fontSize: '$md',
  margin: '$lg 0 0',

  a: {
    color: '$text-primary',
    fontSize: '$md',
    margin: '$lg 0 0'
  }
};
