import { styled } from 'styles/stitches.config';

export const ContentWrapper = styled('div', {
  '@greater-lg': {
    display: 'flex'
  }
});

export const Section = styled('section', {
  width: '100%',
  '&+section': {}
});

export const Paragraph = styled('p', {
  marginBottom: '$lg',
  lineHeight: '$170',
  '@greater-lg': {}
});
