import { Story, Meta } from '@storybook/react/types-6-0';

import { Toast, ToastProps } from './Toast';

export default {
  title: 'Examples/Toast',
  component: Toast,
  args: {},
  argTypes: {},
  parameters: {}
} as Meta;

export const ToastExample: Story<ToastProps> = args => {
  const { children } = args;
  return <Toast {...args}>{children}</Toast>;
};
