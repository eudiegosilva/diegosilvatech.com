import { styled } from 'styles/stitches.config';

const Container = styled('div', {
  mx: 'auto',
  '@less-sm': { maxWidth: '$sm', px: '$md' },
  '@greater-sm': { maxWidth: '$md', px: '$xx' },
  '@greater-md': { maxWidth: '$lg', px: 'calc($xx * 2)' },
  '@greater-lg': { maxWidth: '$xl', px: 'calc($xx * 10)' },
  '@greater-xl': { minWidth: '$xl', px: 'calc($xx * 10)' }
});

export { Container };
