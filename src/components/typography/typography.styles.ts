import { styled, ConfigProps } from 'styles/stitches.config';

const h1: ConfigProps = {
  fontFamily: '$heading',
  fontSize: '$4x',
  lineHeight: '$115',
  margin: '0 0 $lg',
  color: '$text-primary'
};

const h2: ConfigProps = {
  fontFamily: '$heading',
  fontSize: '$xl',
  color: '$text-primary'
};

const p: ConfigProps = {
  fontFamily: '$body',
  color: '$text-secondary'
};

const strong: ConfigProps = {
  fontFamily: '$body',
  color: '$text-primary',
  fontWeight: '$500'
};

export const TypographyWrapper = styled('p', {
  a: {
    fontFamily: '$body',
    color: '$text-primary',
    borderBottom: '0.5px solid $text-secondary',
    textDecoration: 'none',
    transition: '$fast',
    '&:hover, &:focus': {
      opacity: '0.8',
      borderBottom: '1px solid $text-secondary',
      fontWeight: '$500'
    }
  },
  variants: {
    variant: {
      h1,
      h2,
      p,
      strong
    }
  }
});
