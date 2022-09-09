import { styled } from 'styles/stitches.config';

export const Box = styled('div', {});

export const Action = styled('div', {
  display: 'flex',
  gap: '$sm',
  alignItems: 'center',
  fontWeight: '300',
  fontSize: '$md',
  fontFamily: '$epilogue',
  letterSpacing: '$body-small'
});

export const ActionRow = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '$sm'
});

export const Shortcut = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '$xs'
});

export const Kbd = styled('kbd', {
  background: '$transparent-white-03',
  color: '$text-primary',
  padding: '$xs $sm',
  borderRadius: '$sm',
  textTransform: 'uppercase'
});
