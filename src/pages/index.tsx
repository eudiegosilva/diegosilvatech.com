import { HomePage, HomePageProps } from 'templates';

export async function getStaticProps() {
  return {
    props: {
      title: 'Diego Silva | Tech',
      description:
        'Ajudando a melhorar a experiência de desenvolvimento para desenvolvedores do Brasil e do mundo.',
      image: '/static/images/home-cover.jpg'
    }
  };
}

export default function Home({ title, description, image }: HomePageProps) {
  return <HomePage title={title} description={description} image={image} />;
}
