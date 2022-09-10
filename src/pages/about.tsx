import { AboutPage, AboutPageProps } from 'templates';

export async function getStaticProps() {
  return {
    props: {
      title: 'Sobre // @diegosilvatech',
      description:
        'Diego Silva é Brasileiro, desenvolvedor web com foco em criação de interfaces.',
      image: '/static/images/about-cover.jpg'
    }
  };
}

export default function Home({ title, description, image }: AboutPageProps) {
  return <AboutPage title={title} description={description} image={image} />;
}
