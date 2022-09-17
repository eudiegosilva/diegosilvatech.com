import { Story, Meta } from '@storybook/react/types-6-0';

import { Text, TextProps } from './Text';

export default {
  title: 'Examples/Text',
  component: Text,
  args: {
    children: 'Text example',
    as: 'p'
  },
  argTypes: {
    children: {
      description: 'Text content'
    },
    as: { description: 'specifies the elemnt type' }
  },
  parameters: {}
} as Meta;

export const TextExample: Story<TextProps> = args => {
  const { children } = args;
  return <Text {...args}>{children}</Text>;
};
