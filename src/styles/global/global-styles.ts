import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  'html, body': {
    backgroundColor: '$brand-primary-01',
    fontFamily: '$body',
    WebkitFontSmoothing: 'antialiased'
  },
  h1: {
    fontFamily: '$heading',
    fontSize: '$4x',
    lineHeight: '$115',
    margin: '0 0 $lg',
    color: '$text-primary'
  },
  h2: {
    fontFamily: '$heading',
    fontSize: '$xl',
    color: '$text-primary'
  },
  p: {
    fontFamily: '$body',
    color: '$text-secondary'
  },
  strong: {
    fontFamily: '$body',
    color: '$text-primary',
    fontWeight: '$500'
  },
  a: {
    fontFamily: '$body',
    color: '$text-primary',
    borderBottom: '0.5px solid $text-secondary',
    textDecoration: 'none',
    transition: '$fast',
    '&:hover, &:focus': {
      opacity: '0.8',
      fontWeight: '$500'
    }
  },
  kbd: {
    color: '$brand-primary-01',
    background: '$text-secondary',
    padding: '1px 5px',
    borderRadius: '$sm',
    transition: 'background $default ease-in-out',
    fontFamily: '$code',
    fontSize: '$sm'
  }
});
