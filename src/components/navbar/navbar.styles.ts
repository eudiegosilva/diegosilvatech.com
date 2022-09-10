import { motion } from 'framer-motion';

import { styled } from 'styles/stitches.config';

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '$md',
  minHeight: '60px',
  width: '100%',
  flexWrap: 'wrap',
  position: 'absolute',
  top: 0,
  zIndex: '$menu',
  marginTop: '$sm',
  padding: '0 $sm',
  '@bp2': { marginTop: '0' }
});

export const NavbarWrapper = styled('nav', {
  textAlign: 'center',
  flex: 1,
  order: 2,
  flexBasis: '100%',
  '@bp2': { order: 0, flexBasis: 'initial' },
  '@bp3': { overflowX: 'scroll', overflowY: 'hidden' }
});

export const ButtonHeader = styled('div', {
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  borderRadius: '$md',
  color: '$text-primary',
  cursor: 'pointer',
  height: '34px',
  padding: '0 $sm',
  transition: '$default',
  '&:hover': { backgroundColor: '$brand-primary-03' }
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
  padding: 0,
  listStyle: 'none',
  display: 'inline-flex',
  position: 'relative',
  '@bp1': { justifyContent: 'space-around' }
});

export const ListItem = styled('li', {});

export const ItemLink = styled('a', {
  border: 0,
  position: 'relative',
  '&:hover, &:focus': { opacity: 1 }
});

export const ItemContainer = styled(motion.span, {
  color: '$text-secondary',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '$xs',
  fontWeight: '$400',
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
    top: '18px',
    left: '0px',
    right: '0px',
    height: '1px',
    width: '20px',
    background: '$base-white',
    opacity: 0,
    transition: 'opacity $default'
  }
});

export const ItemHovered = styled(motion.span, {
  position: 'absolute',
  top: '-9px',
  left: '0',
  right: '0',
  background: '$brand-primary-03',
  padding: '$lg',
  borderRadius: '$md',
  zIndex: -1
});

export const CommandButtonWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  color: '$text-primary',
  marginLeft: 'auto'
});
