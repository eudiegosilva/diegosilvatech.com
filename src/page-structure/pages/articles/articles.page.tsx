import { Text } from 'components';
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
        </AnimateSharedLayout>
      </PageContent>
    </PageContainer>
  );
};

export { ArticlesPage };
