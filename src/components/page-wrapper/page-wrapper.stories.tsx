import { Story, Meta } from '@storybook/react/types-6-0';

import { PageWrapper, PageWrapperProps } from './PageWrapper';

export default {
  title: 'Examples/PageWrapper',
  component: PageWrapper,
  args: {
    children: 'Example children'
  },
  argTypes: {
    children: {
      description: 'Example label',
      table: {
        defaultValue: {
          summary: 'click me'
        }
      }
    }
  },
  parameters: {}
} as Meta;

export const PageWrapperExample: Story<PageWrapperProps> = args => {
  const { children } = args;
  return <PageWrapper {...args}>{children}</PageWrapper>;
};
