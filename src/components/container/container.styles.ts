import { styled } from 'styles/stitches.config';

export const ContainerWrapper = styled('div', {
  width: '100%',
  mx: 'auto',
  '@greater-sm': { maxWidth: '$sm', px: '20px', border: '2px solid red' },
  '@greater-md': { maxWidth: '$md', px: '20px', border: '2px solid blue' },
  '@greater-lg': { maxWidth: '$lg', px: '20px', border: '2px solid green' },
  '@greater-xl': { maxWidth: '$xl', px: '20px', border: '2px solid yellow' }
});
