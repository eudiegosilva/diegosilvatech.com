import { Story, Meta } from '@storybook/react/types-6-0';

import { ErrorMessage, ErrorMessageProps } from './ErrorMessage';

export default {
  title: 'Examples/ErrorMessage',
  component: ErrorMessage,
  args: { children: 'ErrorMessage children' },
  argTypes: { children: { description: 'ErrorMessage label' } },
  parameters: {}
} as Meta;

export const ErrorMessageExample: Story<ErrorMessageProps> = args => {
  return <ErrorMessage {...args} />;
};
