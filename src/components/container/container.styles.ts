import { styled } from 'styles/stitches.config';

const Container = styled('div', {
  mx: 'auto',
  // '@greater-sm': { maxWidth: '$md', px: '20px', border: '2px solid red' },
  // '@greater-md': { maxWidth: '$lg', px: '20px', border: '2px solid blue' },
  // '@greater-lg': { maxWidth: '$xl', px: '20px', border: '2px solid green' },
  // '@greater-xl': { minWidth: '$xl', px: '20px', border: '2px solid orange' }
  '@less-sm': { maxWidth: '$sm', px: '$md' },
  '@greater-sm': { maxWidth: '$sm', px: '0' },
  '@greater-md': { maxWidth: '$lg', px: 'calc($xx * 6)' },
  '@greater-lg': { maxWidth: '$xl', px: 'calc($xx * 10)' },
  '@greater-xl': { minWidth: '$xl', px: 'calc($xx * 10)' }
});

export { Container };
