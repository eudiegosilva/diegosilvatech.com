import { Story, Meta } from '@storybook/react/types-6-0';

import { ThemeToggle, ThemeToggleProps } from './ThemeToggle';

export default {
  title: 'Examples/ThemeToggle',
  component: ThemeToggle,
  args: {},
  argTypes: {},
  parameters: {}
} as Meta;

export const ThemeToggleExample: Story<ThemeToggleProps> = args => {
  return <ThemeToggle {...args} />;
};
