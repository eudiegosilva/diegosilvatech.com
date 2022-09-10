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
