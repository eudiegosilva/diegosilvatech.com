import { Text, FeaturedArticle } from 'components';
import { AnimateSharedLayout } from 'framer-motion';
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

export type ArticlesPageProps = {
  pageTitle: string;
  allArticles: any;
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
        >
          {article.title}
        </FeaturedArticle>
      );
    });
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
          <s.AllArticlesList></s.AllArticlesList>
        </AnimateSharedLayout>
      </PageContent>
    </PageContainer>
  );
};

export { ArticlesPage };
