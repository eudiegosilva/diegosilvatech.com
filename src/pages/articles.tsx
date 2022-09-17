import { getAllArticles } from 'globals/helpers/blog/blog';
import { getArticleBySlug } from 'globals/helpers/blog/blog';
import { ArticlesPage, ArticlesPageProps } from 'page-structure';

export async function getStaticProps() {
  const allArticles = getAllArticles(['date', 'skip', 'slug', 'title']);

  const description = `Here you can find all the <strong>${allArticles.length} articles</strong> I wrote. You can read about web development, software engineering, and tech career in both English and Portuguese.`;

  const featuredParams = [
    'date',
    'slug',
    'title',
    'image',
    'content',
    'description'
  ];

  const featuredArticles = [
    getArticleBySlug(
      '5-lessons-we-learned-adding-dark-mode-to-our-platform',
      featuredParams
    ),
    getArticleBySlug(
      '23-extensoes-indispensaveis-para-desenvolvedores-web',
      featuredParams
    )
  ];

  return {
    props: {
      tabTitle: 'Articles | diegosilvatech',
      pageTitle: 'Sharing small learnings.',
      description: description,
      image: '/static/images/articles-cover.jpg',
      colorPrimary: 'brand-secondary-high',
      colorSecondary: 'brand-secondary-high',
      allArticles,
      featuredArticles
    }
  };
}

export default function Articles({
  tabTitle,
  pageTitle,
  description,
  image,
  allArticles,
  featuredArticles,
  colorPrimary,
  colorSecondary
}: ArticlesPageProps) {
  return (
    <ArticlesPage
      tabTitle={tabTitle}
      pageTitle={pageTitle}
      description={description}
      image={image}
      allArticles={allArticles}
      featuredArticles={featuredArticles}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
    />
  );
}
