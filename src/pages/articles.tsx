import { getAllArticles } from 'globals/helpers/blog/blog';
import { getArticleBySlug } from 'globals/helpers/blog/blog';
import { ArticlesPage, ArticlesPageProps } from 'page-structure';

export async function getStaticProps() {
  const allArticles = getAllArticles(['date', 'skip', 'slug', 'title']);

  const description = `Here you can find all the <strong>${allArticles.length} articles</strong> I wrote. You can read about web development, ux and ui design, design systems and developer experience.`;

  const featuredParams = [
    'date',
    'slug',
    'title',
    'image',
    'content',
    'description'
  ];

  const featuredArticles = [
    getArticleBySlug('hierarquia-de-importacoes', featuredParams),
    getArticleBySlug('styled-components-e-seus-beneficios', featuredParams)
  ];

  return {
    props: {
      tabTitle: 'Articles | diegosilvatech',
      pageTitle: 'Sharing small learnings.',
      description: description,
      image: '/static/images/articles-cover.jpg',
      colorPrimary: 'accent-sky',
      colorSecondary: 'accent-violet',
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
