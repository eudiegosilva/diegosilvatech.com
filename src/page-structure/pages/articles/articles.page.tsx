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
  console.log(featuredArticles);
  return (
    <PageContainer>
      <PageHead description={description} image={image} tabTitle={tabTitle} />
      <PageContent
        pageTitle={pageTitle}
        colorPrimary={colorPrimary}
        colorSecondary={colorSecondary}
      >
        <h2>articles</h2>
      </PageContent>
    </PageContainer>
  );
};

export { ArticlesPage };
