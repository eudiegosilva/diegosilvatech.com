import { AboutPage, AboutPageProps } from 'templates';

export async function getStaticProps() {
  return {
    props: {
      tabTitle: 'sobre | diegosilvatech',
      pageTitle: 'Code & UI',
      description:
        'Diego Silva é Brasileiro, desenvolvedor web com foco em criação de interfaces.',
      image: '/static/images/about-cover.jpg'
    }
  };
}

export default function About({
  tabTitle,
  pageTitle,
  description,
  image
}: AboutPageProps) {
  return (
    <AboutPage
      tabTitle={tabTitle}
      pageTitle={pageTitle}
      description={description}
      image={image}
    />
  );
}
