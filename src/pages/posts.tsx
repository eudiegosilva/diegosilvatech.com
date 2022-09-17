import { getAllPosts } from 'globals/helpers/blog/blog';
import { getPostBySlug } from 'globals/helpers/blog/blog';
import { PostsPage, PostsPageProps } from 'page-structure';

export async function getStaticProps() {
  const allPosts = getAllPosts(['date', 'skip', 'slug', 'title']);

  const description = `Here you can find all the <strong>99 posts</strong> I wrote. You can read about web development, software engineering, and tech career in both English and Portuguese.`;

  const featuredParams = [
    'date',
    'slug',
    'title',
    'image',
    'content',
    'description'
  ];

  const featuredPosts = [
    getPostBySlug(
      '5-lessons-we-learned-adding-dark-mode-to-our-platform',
      featuredParams
    ),
    getPostBySlug(
      '23-extensoes-indispensaveis-para-desenvolvedores-web',
      featuredParams
    )
  ];

  return {
    props: {
      tabTitle: 'Posts | diegosilvatech',
      pageTitle: 'Sharing small learnings.',
      description: description,
      image: '/static/images/posts-cover.jpg',
      colorPrimary: 'brand-secondary-high',
      colorSecondary: 'brand-secondary-high',
      allPosts,
      featuredPosts
    }
  };
}

export default function Posts({
  tabTitle,
  pageTitle,
  description,
  image,
  allPosts,
  featuredPosts,
  colorPrimary,
  colorSecondary
}: PostsPageProps) {
  return (
    <PostsPage
      tabTitle={tabTitle}
      pageTitle={pageTitle}
      description={description}
      image={image}
      allPosts={allPosts}
      featuredPosts={featuredPosts}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
    />
  );
}
