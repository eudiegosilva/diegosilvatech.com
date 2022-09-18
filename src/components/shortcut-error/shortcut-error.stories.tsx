import { Story, Meta } from '@storybook/react/types-6-0';

import { ShortcutError, ShortcutErrorProps } from './ShortcutError';

export default {
  title: 'Examples/ShortcutError',
  component: ShortcutError,
  args: {
    disableCommand: true
  },
  argTypes: {},
  parameters: {}
} as Meta;

export const ShortcutErrorExample: Story<ShortcutErrorProps> = args => {
  return <ShortcutError {...args} />;
};
