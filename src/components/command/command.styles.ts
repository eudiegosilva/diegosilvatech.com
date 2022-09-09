import { KBarPositioner, KBarAnimator, KBarSearch } from 'kbar';

import { styled } from 'styles/stitches.config';

export const CommandWrapper = styled('div', {});

export const Positioner = styled(KBarPositioner, {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: 0,
  padding: '14vh $md $md',
  background: '$transparent-black-02',
  boxSizing: 'border-box'
});

export const Search = styled(KBarSearch, {
  padding: '$lg',
  fontSize: '$md',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: '$background-primary',
  color: '$text-primary',
  fontFamily: '$epilogue',
  fontWeight: '$300',
  '&::placeholder': {
    textTransform: 'lowercase',
    color: '$text-secondary'
  }
});

export const Animator = styled(KBarAnimator, {
  maxWidth: '800px',
  width: '100%',
  color: '$text-primary',
  borderRadius: '$md',
  overflow: 'hidden',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: '$transparent-white-03',
    WebkitBackdropFilter: 'saturate(300%) blur(25px)',
    backdropFilter: 'saturate(300%) blur(25px)'
  },

  /* hide scrollbar for chrome, safari and opera */
  '& > div > div::-webkit-scrollbar': {
    display: 'none'
  },

  /* hide scrollbar for ie, edge and firefox */
  '& > div > div': {
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none'
  }
});
