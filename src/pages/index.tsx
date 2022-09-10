import { HomePage, HomePageProps } from 'templates';

export async function getStaticProps() {
  return {
    props: {
      tabTitle: 'diegosilvatech',
      description:
        'Helping to improve the development experience for developers in Brazil and around the world.',
      image: '/static/images/home-cover.jpg'
    }
  };
}

export default function Home({ tabTitle, description, image }: HomePageProps) {
  return (
    <HomePage tabTitle={tabTitle} description={description} image={image} />
  );
}
