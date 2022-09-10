import { Story, Meta } from '@storybook/react/types-6-0';

import { ShortcutHome, ShortcutHomeProps } from './ShortcutHome';

export default {
  title: 'Examples/ShortcutHome',
  component: ShortcutHome,
  args: {
    disableCommand: true
  },
  argTypes: {},
  parameters: {}
} as Meta;

export const ShortcutHomeExample: Story<ShortcutHomeProps> = args => {
  return <ShortcutHome {...args} />;
};
