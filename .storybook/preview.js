import { RouterContext } from 'next/dist/shared/lib/router-context';
import { globalStyles, tokens } from '../src/styles';

globalStyles();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: '$brand-primary-low',
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
        name: '$brand-primary-03',
        value: tokens.color.palette['brand-primary-03']
      },
      {
        name: '$brand-primary-11',
        value: tokens.color.palette['brand-primary-11']
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
