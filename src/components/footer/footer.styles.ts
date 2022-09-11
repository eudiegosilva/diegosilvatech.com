import { styled } from 'styles/stitches.config';

export const FooterWrapper = styled('footer', {
  color: '$text-secondary',
  padding: '$lg 0',
  display: 'flex',
  justifyContent: 'space-around',
  '@less-md': { overflowX: 'scroll', overflowY: 'hidden', padding: '$sm 0' },
  '&::-webkit-scrollbar': {
    backgroundColor: 'transparent',
    width: 0
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
    borderRadius: '$sm'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent',
    borderRadius: '$sm'
  }
});

export const Anchor = styled('a', {
  color: '$text-secondary',
  fontSize: '$sm',
  textDecoration: 'none',
  textTransform: 'lowercase',
  transition: '$fast',
  '&:hover, &:focus': { color: '$text-primary' },
  padding: '$sm $lg',
  mx: '$xs',
  border: 'none'
});
