// @ts-nocheck
import { ErrorMessage } from 'components';
import {
  getArticleBySlug,
  getAllArticles,
  convertMarkdownToHtml
} from 'globals/helpers/blog/blog';
import { ArticlePage } from 'page-structure';

type ArticleProps = {
  errorCode: number;
  title: string;
  description: string;
  slug: string;
  date: string;
  image: string;
  content: string;
};

const Article = ({
  errorCode,
  title,
  description,
  slug,
  date,
  image,
  content
}: ArticleProps) => {
  if (errorCode) {
    return <ErrorMessage code={errorCode} />;
  }

  const tabTitle = `${title} | diegosilvatech`;
  const pageTitle = title;
  const articleDescription = description || '';
  const articleUrl = `https://diegosilvatech.com/${slug}`;
  const articleDate = new Date(date).toISOString();
  const articleImage = image
    ? `https://diegosilvatech.com${image}`
    : 'https://diegosilvatech.com/assets/images/diegosilvatech.jpg';

  return (
    <ArticlePage
      tabTitle={tabTitle}
      articleTitle={pageTitle}
      description={articleDescription}
      image={articleImage}
      date={articleDate}
      url={articleUrl}
      content={content}
    />
  );
};

export async function getStaticProps({ params }) {
  try {
    const article = getArticleBySlug(params.slug, [
      'canonical_url',
      'content',
      'date',
      'description',
      'image',
      'lang',
      'slug',
      'title'
    ]);

    const content = await convertMarkdownToHtml(article.content || 'empty');

    const isProd = process.env.NODE_ENV === 'production';
    const base = isProd
      ? 'https://diegosilvatech.com'
      : 'http://localhost:3000';

    if (isProd) {
      const viewsReq = await fetch(`${base}/api/views/${params.slug}`);
      const viewsRes = await viewsReq.json();

      article.views = new Intl.NumberFormat().format(viewsRes.views || 0);
    }

    return {
      props: {
        ...article,
        content
      },
      revalidate: 60
    };
  } catch (e) {
    return { props: { errorCode: 404 } };
  }
}

export async function getStaticPaths() {
  const articles = getAllArticles(['slug']);

  return {
    paths: articles.map(article => {
      return { params: { slug: article.slug } };
    }),
    fallback: 'blocking'
  };
}

export default Article;
