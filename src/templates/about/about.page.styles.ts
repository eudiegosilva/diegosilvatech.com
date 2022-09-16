import { styled } from 'styles/stitches.config';

export const ContentWrapper = styled('div', {});

export const SectionWrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@greater-lg': { flexDirection: 'row' }
});
export const Section = styled('section', {
  width: '100%',
  '@greater-lg': { width: '48%' }
});
