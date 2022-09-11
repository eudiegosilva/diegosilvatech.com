import { RouterContext } from 'next/dist/shared/lib/router-context';
import { globalStyles, tokens } from '../src/styles';

globalStyles();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: '$base-white',
    values: [
      {
        name: '$base-white',
        value: tokens.color.palette['base-white']
      },
      {
        name: '$brand-primary-low',
        value: tokens.color.palette['brand-primary-low']
      },
      {
        name: '$brand-primary-mid',
        value: tokens.color.palette['brand-primary-mid']
      },
      {
        name: '$brand-primary-high',
        value: tokens.color.palette['brand-primary-high']
      },
    ]
  },
  controls: {
    a11y: { disable: true },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    expanded: true,
    hideNoControlsWarning: true
  },
  options: {
    storySort: {
      method: 'alphabetical'
    }
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
};
