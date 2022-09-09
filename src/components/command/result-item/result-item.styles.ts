import { styled } from 'styles/stitches.config';

export const Box = styled('div');

export const Action = styled('div', {
  display: 'flex',
  gap: '8px',
  alignItems: 'center'
});

export const ActionRow = styled('div', {
  display: 'flex',
  flexDirection: 'column'
});

export const Shortcut = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px'
});

export const Kbd = styled('kbd', {
  background: 'rgba(255, 255, 255, .1)',
  color: '#8f9ba8',
  padding: '4px 8px',
  textTransform: 'uppercase'
});
