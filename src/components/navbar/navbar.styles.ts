import { motion } from 'framer-motion';

import { styled } from 'styles/stitches.config';

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '$md',
  minHeight: '59px',
  width: '100%',
  flexWrap: 'wrap',
  position: 'absolute',
  top: 0,
  zIndex: '$menu',
  marginTop: '$sm',
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
  color: '$primary',
  cursor: 'pointer',
  height: '34px',
  padding: '0 $sm',
  transition: '$default',
  '&:hover': { i: { color: '$text-high' }, backgroundColor: '$hover-highlight' }
});

export const ButtonLogo = styled('div', {
  fontSize: '$md',
  marginLeft: '$sm',
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
  top: '$xs',
  '@bp1': { justifyContent: 'space-around' }
});

export const ListItem = styled('li', {});

export const ItemLink = styled('a', {
  border: 0,
  position: 'relative',
  '&:hover, &:focus': { opacity: 1 }
});

export const ItemContainer = styled(motion.span, {
  color: '$text-low',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '$xs',
  fontWeight: '$500',
  letterSpacing: '1.2px',
  padding: '$lg',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'color $default',
  '&:hover': { color: '$text-high' },

  '&::after': {
    content: '""',
    position: 'absolute',
    margin: '0px auto',
    top: '18px',
    left: '0px',
    right: '0px',
    height: '1px',
    width: '20px',
    background: 'rgb(255, 255, 255)',
    opacity: 0,
    transition: 'opacity $default'
  }
});

export const ItemHovered = styled(motion.span, {
  position: 'absolute',
  top: '-12px',
  left: '0',
  right: '0',
  background: '$hover-highlight',
  padding: 20,
  borderRadius: '$md',
  zIndex: -1
});

export const CommandButtonWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingRight: '$md',
  marginLeft: 'auto'
});

export const CommandIcon = styled('i', {
  fontSize: '$xl',
  lineHeight: '$133',
  color: '$text-high',
  transition: '$default'
});
