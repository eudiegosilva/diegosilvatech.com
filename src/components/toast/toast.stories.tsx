import { Story, Meta } from '@storybook/react/types-6-0';

import { Toast, ToastProps } from './Toast';

export default {
  title: 'Examples/Toast',
  component: Toast,
  args: {
    title: 'Link copiado :)',
    description: 'Compartilhe com todo mundo!',
    variant: 'success',
    showToast: true,
    setShowToast: () => null
  },
  argTypes: {
    title: { description: 'Toast title' },
    description: { description: 'Toast description' },
    variant: { description: 'Toast style' },
    showToast: { description: 'Toggle toast visibility' },
    setShowToast: { description: 'Trigger toast visibility' }
  },
  parameters: {}
} as Meta;

export const ToastExample: Story<ToastProps> = args => {
  return <Toast {...args} />;
};
