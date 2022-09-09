import { Story, Meta } from '@storybook/react/types-6-0';

import { Command, CommandProps } from './Command';

export default {
  title: 'Examples/Command',
  component: Command,
  args: {},
  argTypes: {},
  parameters: {}
} as Meta;

export const CommandExample: Story<CommandProps> = args => {
  return <Command {...args} />;
};
