import { Story, Meta } from '@storybook/react/types-6-0';

import { Footer, FooterProps } from './Footer';

export default {
  title: 'Examples/Footer',
  component: Footer,
  args: {},
  argTypes: {},
  parameters: {}
} as Meta;

export const CommandExample: Story<FooterProps> = args => {
  return <Footer {...args} />;
};
