import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  'html, body': {
    backgroundColor: '$brand-primary-low',
    fontFamily: '$body',
    WebkitFontSmoothing: 'antialiased',
    '&::-webkit-scrollbar': {
      backgroundColor: 'transparent',
      width: 5
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '$brand-primary-scrollbar'
    }
  },
  a: {
    // fontFamily: '$body',
    // color: '$text-primary',
    // borderBottom: '0.5px solid $text-secondary',
    // textDecoration: 'none',
    // transition: '$fast',
    // '&:hover, &:focus': {
    //   opacity: '0.8'
    // }
  },
  img: {
    borderRadius: '$sm',
    minWidth: '100%',
    maxWidth: '100%'
  },
  ul: {
    margin: 0
  }
});
