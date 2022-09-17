import {
  PageContent,
  PageHead,
  PageHeadProps,
  PageContentProps,
  PageContainer
} from 'page-structure';

import * as s from './posts.page.styles';

type GradiendColorsProps = Pick<
  PageContentProps,
  'colorPrimary' | 'colorSecondary'
>;

export type PostsPageProps = {
  pageTitle: string;
  allPosts: any;
  featuredPosts: any;
} & PageHeadProps &
  GradiendColorsProps;

const PostsPage = ({
  description,
  image,
  tabTitle,
  pageTitle,
  allPosts,
  featuredPosts,
  colorPrimary,
  colorSecondary
}: PostsPageProps) => {
  console.log(featuredPosts);
  return (
    <PageContainer>
      <PageHead description={description} image={image} tabTitle={tabTitle} />
      <PageContent
        pageTitle={pageTitle}
        colorPrimary={colorPrimary}
        colorSecondary={colorSecondary}
      >
        <h2>posts</h2>
      </PageContent>
    </PageContainer>
  );
};

export { PostsPage };
