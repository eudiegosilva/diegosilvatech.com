import { Story, Meta } from '@storybook/react/types-6-0';

import { Example, ExampleProps } from './Example';

export default {
  title: 'Examples/Example',
  component: Example,
  args: { children: 'Example children' },
  argTypes: { children: { description: 'Example label' } },
  parameters: {}
} as Meta;

export const CommandExample: Story<ExampleProps> = args => {
  const { children } = args;
  return <Example {...args}>{children}</Example>;
};
