import { HomePage, HomePageProps } from 'templates';

export async function getStaticProps() {
  return {
    props: {
      title: 'Diego Silva | Tech',
      description:
        'Helping to improve the development experience for developers in Brazil and around the world.',
      image: '/static/images/home-cover.jpg'
    }
  };
}

export default function Home({ title, description, image }: HomePageProps) {
  return <HomePage title={title} description={description} image={image} />;
}
