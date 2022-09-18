import { styled } from 'styles/stitches.config';

export const Box = styled('div', {});

export const Action = styled('div', {
  display: 'flex',
  gap: '$sm',
  alignItems: 'center',
  fontWeight: '300',
  fontSize: '$md',
  fontFamily: '$body',
  letterSpacing: '$body-small',

  width: '100%'
});

export const ActionRow = styled('div', {
  display: 'flex',
  fontSize: '$sm',
  width: '100%'
});

export const Shortcut = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$sm',

  kbd: {
    padding: '$xs $sm',
    borderRadius: '$xs',
    textTransform: 'uppercase'
  }
});
