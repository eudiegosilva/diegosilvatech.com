import { motion } from 'framer-motion';

import { styled } from 'styles/stitches.config';

import { Container } from 'components/container/container.styles';

export const HeaderContainer = styled('header', {
  zIndex: 0,
  width: '100%'
});

export const HeaderWrapper = styled(Container, {
  display: 'flex',
  alignItems: 'center',
  minHeight: '60px',
  marginTop: '$md',
  '@greater-lg': { marginTop: 0 }
});

export const NavbarWrapper = styled('nav', {
  flex: 1,
  flexBasis: '100%',
  overflow: 'hidden',
  overflowX: 'scroll',
  overflowY: 'hidden',
  textAlign: 'center',
  '@greater-lg': { flexBasis: 'initial', overflow: 'hidden' },
  '&::-webkit-scrollbar': {
    backgroundColor: 'transparent',
    width: 0,
    height: 0
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

export const ButtonHeader = styled('div', {
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  borderRadius: '$sm',
  color: '$text-primary',
  cursor: 'pointer',
  height: '34px',
  padding: '0 $sm',
  transition: '$default',
  '&:hover': { backgroundColor: '$brand-primary-mid' }
});

export const ButtonLogo = styled('div', {
  fontSize: '$md',
  fontFamily: '$body',
  textDecoration: 'none',
  height: '100%',
  display: 'flex',
  borderRadius: '$sm',
  overflow: 'hidden'
});

export const List = styled('ul', {
  margin: 0,
  listStyle: 'none',
  display: 'inline-flex',
  position: 'relative',
  '@greater-lg': { justifyContent: 'space-around' }
});

export const ListItem = styled('li', {});

export const ItemLink = styled('a', {
  border: 0,
  position: 'relative',
  textDecoration: 'none',
  '&:hover, &:focus': { opacity: 1 }
});

export const ItemContainer = styled(motion.span, {
  color: '$text-secondary',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '$xs',
  fontWeight: '$500',
  letterSpacing: '1.2px',
  padding: '$lg',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'color $default',
  '&:hover': { color: '$text-primary' },

  '&::after': {
    content: '""',
    position: 'absolute',
    margin: '0px auto',
    top: '24px',
    left: '0px',
    right: '0px',
    height: '1px',
    width: '32px',
    background: '$brand-primary-high',
    opacity: 0,
    transition: 'opacity $default',
    zIndex: '$always-on-top'
  }
});

export const ItemHovered = styled(motion.span, {
  position: 'absolute',
  top: '-9px',
  left: '0',
  right: '0',
  background: '$brand-primary-mid',
  padding: '$lg',
  borderRadius: '$sm',
  zIndex: -1
});

export const CommandButtonWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  color: '$text-primary',
  marginLeft: 'auto'
});
