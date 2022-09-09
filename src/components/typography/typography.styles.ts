import { styled, ConfigProps } from 'styles/stitches.config';

const heading: ConfigProps = {
  fontFamily: '$epilogue',
  letterSpacing: '$epilogue'
};

const body: ConfigProps = {
  fontFamily: '$epilogue'
};

export const TypographyWrapper = styled('p', {
  variants: {
    variant: {
      heading: { ...heading },
      body: { ...body }
    }
  }
});
