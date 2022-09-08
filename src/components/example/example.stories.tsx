import { Story, Meta } from '@storybook/react/types-6-0';

import { Example, ExampleProps } from './Example';

export default {
  title: 'Examples/Example',
  component: Example,
  args: {
    children: 'click me'
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

export const ButtonExample: Story<ExampleProps> = args => {
  const { children } = args;
  return <Example {...args}>{children}</Example>;
};
