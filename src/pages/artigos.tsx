// @ts-nocheck
import { getAllArticles } from 'globals/helpers/blog/blog';
import { getArticleBySlug } from 'globals/helpers/blog/blog';
import { ArticlesPage, ArticlesPageProps } from 'page-structure';

export async function getStaticProps() {
  const allArticles = getAllArticles(['date', 'skip', 'slug', 'title']);

  const description = `Aqui você vai encontrar quase todos os <strong>${allArticles.length} artigos</strong> que escrevi. Você pode ler sobre desenvolvimento web, ux e ui design, design systems e developer experience.`;

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
      tabTitle: 'Artigos | diegosilvatech',
      pageTitle: 'Compartilhar & Aprender',
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
