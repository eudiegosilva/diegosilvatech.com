import { motion } from 'framer-motion';

import { styled } from 'styles/stitches.config';

import { Container } from 'components/container/container.styles';

export const HeaderContainer = styled('header', {
  zIndex: '$root',
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
    backgroundColor: 'transparent'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent'
  }
});

export const ButtonLogo = styled('div', {
  fontSize: '$md',
  fontFamily: '$body',
  textDecoration: 'none',
  height: '100%',
  display: 'flex',
  borderRadius: '$xs',
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
  color: '$text-contrast-low',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '$xs',
  fontWeight: '$500',
  letterSpacing: '1.2px',
  padding: '$lg',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'color $default',
  '&:hover': { color: '$text-contrast-high' },

  '&::after': {
    content: '""',
    position: 'absolute',
    margin: '0px auto',
    top: '24px',
    left: '0px',
    right: '0px',
    height: '1px',
    width: '32px',
    background: '$brand-primary-11',
    opacity: 0,
    transition: 'opacity $default',
    zIndex: '$always-on-top'
  }
});

export const ItemHovered = styled(motion.span, {
  position: 'absolute',
  top: '-6px',
  left: '0',
  right: '0',
  background: '$brand-primary-04',
  padding: '$lg',
  borderRadius: '$xs',
  zIndex: '$behind'
});

export const CommandButtonWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  color: '$text-contrast-high',
  marginLeft: 'auto'
});
