import { HomePage, HomePageProps } from 'page-structure';

export async function getStaticProps() {
  return {
    props: {
      tabTitle: 'diegosilvatech',
      pageTitle: 'Diego Silva',
      description: 'Developer Experience, UI & UX',
      image: '/static/images/home-cover.jpg'
    }
  };
}

export default function Home({ tabTitle, description, image }: HomePageProps) {
  return (
    <HomePage tabTitle={tabTitle} description={description} image={image} />
  );
}
