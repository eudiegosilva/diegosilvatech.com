import * as ToastPrimitive from '@radix-ui/react-toast';

import { styled, keyframes } from 'styles/stitches.config';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(20px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 1, transform: 'translateY(0)' },
  '100%': { opacity: 0, transform: 'translateY(20px)' }
});

export const ToastWrapper = styled(ToastPrimitive.Root, {
  background: '$brand-primary-03',
  borderRadius: '$md',
  border: '1px solid $brand-primary-11',
  boxShadow: 'rgb(0 0 0 / 8%) 0px 4px 13px',
  color: '$text-primary',
  fontSize: '$xs',
  overflow: 'hidden',
  margin: 0,
  padding: '$sm',
  display: 'flex',
  '&[data-state="open"]': {
    animation: `100ms ease-in forwards ${slideUpAndFade}`
  },
  '&[data-state="closed"]': {
    animation: `100ms ease-in forwards ${slideDownAndFade}`
  },
  zIndex: '$modal'
});

export const IconWrapper = styled('div', {
  marginRight: '$sm',
  display: 'flex',
  alignItems: 'center',

  variants: {
    variant: {
      success: {
        color: '$brand-primary-11'
      },
      error: {
        color: '$brand-secondary-11'
      }
    }
  }
});

export const Title = styled(ToastPrimitive.Title, {
  color: '$text-primary',
  fontSize: '$sm',
  lineHeight: '$150'
});

export const Description = styled(ToastPrimitive.Description, {
  color: '$text-secondary',
  fontSize: '$xs'
});

export const Close = styled(ToastPrimitive.Close, {
  position: 'absolute',
  right: '0',
  top: '0',
  width: '32px',
  height: '32px',
  background: 'transparent',
  border: '0',
  fontSize: '$sm',
  color: '$text-secondary',
  transition: 'color $default',
  '&:hover': { color: '$text-primary' }
});

export const Viewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: '$lg',
  right: '$lg',
  zIndex: '$menu'
});
