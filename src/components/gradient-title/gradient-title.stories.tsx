import { Story, Meta } from '@storybook/react/types-6-0';

import { GradientTitle, GradientTitleProps } from './GradientTitle';

export default {
  title: 'Examples/GradientTitle',
  component: GradientTitle,
  args: { children: 'GradientTitle children' },
  argTypes: { children: { description: 'Title' } },
  parameters: {}
} as Meta;

export const GradientTitleExample: Story<GradientTitleProps> = args => {
  const { children } = args;
  return <GradientTitle {...args}>{children}</GradientTitle>;
};
