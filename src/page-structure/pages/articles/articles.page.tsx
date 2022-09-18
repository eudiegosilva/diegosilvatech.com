import { useState } from 'react';

import { Text, FeaturedArticle } from 'components';
import { AnimateSharedLayout } from 'framer-motion';
import { ArticleDate } from 'globals/helpers/blog/article-date';
import { removeHtmlFrontString } from 'globals/helpers/blog/remove-html-from-string';
import {
  PageContent,
  PageHead,
  PageHeadProps,
  PageContentProps,
  PageContainer
} from 'page-structure';

import * as s from './articles.page.styles';

type GradiendColorsProps = Pick<
  PageContentProps,
  'colorPrimary' | 'colorSecondary'
>;

type ArticleProps = {
  date: string;
  slug: string;
  title: string;
  skip?: boolean;
};

type AnimationProps = {
  children: React.ReactNode;
  index: any;
};

export type ArticlesPageProps = {
  pageTitle: string;
  allArticles: ArticleProps[];
  featuredArticles: any;
} & PageHeadProps &
  GradiendColorsProps;

const ArticlesPage = ({
  description,
  image,
  tabTitle,
  pageTitle,
  allArticles,
  featuredArticles,
  colorPrimary,
  colorSecondary
}: ArticlesPageProps) => {
  const renderFeaturedArticles = () => {
    return featuredArticles.map((article: any, index: number) => {
      return (
        <FeaturedArticle
          key={article.title}
          index={index}
          href={`/${article.slug}/`}
          title={article.title}
          description={article.description}
          image={article.image}
          content={article.content}
        />
      );
    });
  };

  const renderArticlesList = () => {
    return allArticles.map((article, index) => {
      if (!article.skip) {
        return (
          <s.ArticleItem key={article.title}>
            <s.TextAnchor as="a" href={`/${article.slug}/`}>
              <Animation index={index}>
                <s.TextTitle as="span">{article.title}</s.TextTitle>
                <s.TextDate as="span">
                  <ArticleDate dateString={article.date} />
                </s.TextDate>
              </Animation>
            </s.TextAnchor>
          </s.ArticleItem>
        );
      }
    });
  };

  const Animation = ({ children, index }: AnimationProps) => {
    const [hovered, setHovered] = useState('');
    const isHovered = hovered === index;

    return (
      <s.AnimationWrapper
        onHoverStart={() => setHovered(index)}
        onHoverEnd={() => setHovered('')}
      >
        {isHovered && (
          <s.AnimationHovered
            layoutId="listItem"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
        {children}
      </s.AnimationWrapper>
    );
  };

  return (
    <PageContainer>
      <PageHead
        description={removeHtmlFrontString(description)}
        image={image}
        tabTitle={tabTitle}
      />
      <PageContent
        pageTitle={pageTitle}
        colorPrimary={colorPrimary}
        colorSecondary={colorSecondary}
      >
        <AnimateSharedLayout>
          <Text dangerouslySetInnerHTML={{ __html: description }} />
          <Text as="h2">Featured Articles</Text>
          <s.FeaturedArticlesGroup>
            {renderFeaturedArticles()}
          </s.FeaturedArticlesGroup>

          <Text as="h2">All Articles</Text>
          <s.AllArticlesList>{renderArticlesList()}</s.AllArticlesList>
        </AnimateSharedLayout>
      </PageContent>
    </PageContainer>
  );
};

export { ArticlesPage };
