import { Meta } from '@storybook/react/types-6-0';

import { Navbar } from './Navbar';

export default {
  title: 'Examples/Navbar',
  component: Navbar,
  args: {},
  argTypes: {},
  parameters: {}
} as Meta;

export const NavbarExample = () => {
  return <Navbar />;
};
