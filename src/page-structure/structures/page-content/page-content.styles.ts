import { styled } from 'styles/stitches.config';

export const ContentWrapper = styled('div', {
  width: '100%',
  padding: '$lg 0',
  '@greater-sm': { padding: '$xx 0' },
  '@greater-lg': { padding: 'calc($xx * 3) 0' },

  '.author-image': {
    borderRadius: '10px',
    filter: 'grayscale(100%)',
    '&:hover': { filter: 'grayscale(0)', cursor: 'pointer' },
    transition: '$default'
  }
});
