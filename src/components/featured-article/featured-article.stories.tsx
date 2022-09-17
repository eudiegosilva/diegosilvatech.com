import { Story, Meta } from '@storybook/react/types-6-0';

import { FeaturedArticle, FeaturedArticleProps } from './FeaturedArticle';

export default {
  title: 'Examples/FeaturedArticle',
  component: FeaturedArticle,
  args: { children: 'Example children' },
  argTypes: { children: { description: 'Example label' } },
  parameters: {}
} as Meta;

export const ExampleFeaturedArticle: Story<FeaturedArticleProps> = args => {
  const { children } = args;
  return <FeaturedArticle {...args}>{children}</FeaturedArticle>;
};
