import { styled } from 'styles/stitches.config';

import { Container } from 'components/container/container.styles';

export const FooterContainer = styled(Container, {
  display: 'flex',
  width: '100%',
  '@greater-lg': { width: 'fit-content' }
});

export const FooterWrapper = styled('footer', {
  color: '$text-secondary',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  '@greater-lg': { justifyContent: 'center' },

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
  border: 'none',
  padding: '$lg 0',
  '@greater-lg': { mx: '$lg' }
});
