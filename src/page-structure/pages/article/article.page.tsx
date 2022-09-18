import { ArticleJsonLd } from 'next-seo';

import { ArticleDate } from 'globals/helpers/blog/article-date';
import {
  PageContent,
  PageHead,
  PageHeadProps,
  PageContainer
} from 'page-structure';

import * as s from './article.page.styles';

export type ArticlePageProps = {
  articleTitle: string;
  date: string;
  url: string;
  content: string;
} & PageHeadProps;

const ArticlePage = ({
  description,
  image,
  tabTitle,
  articleTitle,
  date,
  url,
  canonicalUrl,
  content
}: ArticlePageProps) => {
  return (
    <PageContainer>
      <PageHead
        description={description}
        image={image}
        tabTitle={tabTitle}
        canonicalUrl={canonicalUrl}
      />
      <ArticleJsonLd
        authorName="Diego Silva"
        type="Blog"
        url={url}
        title={tabTitle}
        images={[image]}
        datePublished={date}
        dateModified={date}
        description={description}
      />

      <PageContent
        pageTitle={articleTitle}
        colorPrimary="accent-sky"
        colorSecondary="accent-sky"
      >
        <s.ArticleDate>
          <ArticleDate dateString={date} />
        </s.ArticleDate>
        <s.Divider />
        <s.ArticleContent>
          <s.ArticleContainer>
            <s.ArticleHTMLContentWrapper
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </s.ArticleContainer>
        </s.ArticleContent>
      </PageContent>
    </PageContainer>
  );
};

export { ArticlePage };
