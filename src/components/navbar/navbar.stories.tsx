import { Story, Meta } from '@storybook/react/types-6-0';

import { Navbar, NavbarProps } from './Navbar';

export default {
  title: 'Examples/Navbar',
  component: Navbar,
  args: {
    children: 'click me'
  },
  argTypes: {
    children: {
      description: 'Navbar label',
      table: {
        defaultValue: {
          summary: 'click me'
        }
      }
    }
  },
  parameters: {}
} as Meta;

export const ButtonNavbar: Story<NavbarProps> = args => {
  const { children } = args;
  return <Navbar {...args}>{children}</Navbar>;
};
