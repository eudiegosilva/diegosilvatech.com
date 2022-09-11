import { Story, Meta } from '@storybook/react/types-6-0';

import { Container, ContainerProps } from './Container';

export default {
  title: 'Examples/Container',
  component: Container,
  args: { children: 'responsive content' },
  argTypes: {},
  parameters: {}
} as Meta;

export const ContainerExample: Story<ContainerProps> = args => {
  const { children } = args;
  return (
    <Container {...args}>
      <div
        style={{ backgroundColor: '#0066ff80', border: '2px solid #000000' }}
      >
        <Container>
          <div
            style={{
              backgroundColor: '#47fff950',
              border: '2px solid #1472ed'
            }}
          >
            {children}
          </div>
        </Container>
      </div>
    </Container>
  );
};
