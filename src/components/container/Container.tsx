import { styled } from 'styles/stitches.config';

const Container = styled('div', {
  mx: 'auto',
  // '@greater-sm': { maxWidth: '$md', px: '20px', border: '2px solid red' },
  // '@greater-md': { maxWidth: '$lg', px: '20px', border: '2px solid blue' },
  // '@greater-lg': { maxWidth: '$xl', px: '20px', border: '2px solid green' },
  // '@greater-xl': { minWidth: '$xl', px: '20px', border: '2px solid orange' }
  '@greater-sm': { maxWidth: '$md', px: '20px' },
  '@greater-md': { maxWidth: '$lg', px: '20px' },
  '@greater-lg': { maxWidth: '$xl', px: '20px' },
  '@greater-xl': { minWidth: '$xl', px: '20px' }
});

export { Container };
