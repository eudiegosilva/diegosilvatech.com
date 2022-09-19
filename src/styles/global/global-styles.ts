import { globalCss } from '../stitches.config';

import { articleStyles } from './article-styles';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  'html, body': {
    backgroundColor: '$brand-primary-01',
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
      backgroundColor: '$brand-primary-09'
    }
  },
  img: {
    borderRadius: '$xs',
    minWidth: '100%',
    maxWidth: '100%'
  },

  ...articleStyles
});
