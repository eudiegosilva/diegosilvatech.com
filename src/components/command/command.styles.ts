import { KBarPositioner, KBarAnimator, KBarSearch } from 'kbar';

import { styled } from 'styles/stitches.config';

export const CommandWrapper = styled('div', {});

export const Positioner = styled(KBarPositioner, {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: 'rgba(0, 0, 0, .8)',
  boxSizing: 'border-box'
});

export const Search = styled(KBarSearch, {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: 'rgba(255, 255, 255, 0.05)',
  color: '#f2f2f2'
});

export const Animator = styled(KBarAnimator, {
  backgroundColor: '#1a1c1e',
  maxWidth: '600px',
  width: '100%',
  color: '#f2f2f2',
  borderRadius: '8px',
  overflow: 'hidden',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    WebkitBackdropFilter: 'saturate(300%) blur(25px)',
    backdropFilter: 'saturate(300%) blur(25px)'
  },

  /* Hide scrollbar for Chrome, Safari and Opera */
  '& > div > div::-webkit-scrollbar': {
    display: 'none'
  },

  /* Hide scrollbar for IE, Edge and Firefox */
  '& > div > div': {
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none'
  }
});
