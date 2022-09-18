import { useState } from 'react';

import { Text } from 'components';
import readingTime from 'reading-time';

import * as s from './featured-article.styles';

export type FeaturedArticleProps = {
  href: string;
  index: any;
  title: string;
  description: string;
  image: string;
  content: string;
};

type AnimationProps = {
  children: React.ReactNode;
  index: any;
};

const Animation = ({ children, index }: AnimationProps) => {
  const [hovered, setHovered] = useState('');
  const isHovered = hovered === index;

  return (
    <s.AnimationWrapper
      onHoverStart={() => setHovered(index)}
      onHoverEnd={() => setHovered('')}
      className="featured-article-animation"
    >
      {isHovered && (
        <s.AnimationHovered
          layoutId="featured-articles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      {children}
    </s.AnimationWrapper>
  );
};

const FeaturedArticle = ({
  href,
  index,
  image,
  title,
  description,
  content
}: FeaturedArticleProps) => {
  const articleStats = readingTime(content);

  return (
    <s.FeaturedArticleWrapper href={href}>
      <Animation index={index}>
        <s.ArticleContainer>
          <s.ImageContainer css={{ backgroundImage: `url(${image})` }} />
          <s.ArticleContent>
            <Text as="h3">{title}</Text>
            <Text
              css={{
                display: '-webkit-box',
                margin: 0,
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {description}
            </Text>
            <Text
              css={{
                margin: '5px 0 0',
                color: '$text-contrast-high',
                textTransform: 'uppercase',
                display: 'inline-block',
                fontWeight: 500,
                letterSpacing: '1.2px',
                fontSize: '12px'
              }}
            >
              {articleStats.text}
            </Text>
          </s.ArticleContent>
        </s.ArticleContainer>
      </Animation>
    </s.FeaturedArticleWrapper>
  );
};

export { FeaturedArticle };
