import { AboutPage, AboutPageProps } from 'page-structure';

export async function getStaticProps() {
  return {
    props: {
      tabTitle: 'About | diegosilvatech',
      pageTitle: 'Development experience.',
      description:
        'Diego Silva is a Brazilian Frontend Developer. He currently lives in São Paulo and works with Developer Experience at Neon Bank. He is passionate about beautiful and smart user interfaces. He has extensive experience with selection processes and resume building. He is the founder and Community Manager of 99juniors.',
      image: '/static/images/about-cover.jpg',
      colorPrimary: 'accent-sky',
      colorSecondary: 'accent-violet'
    }
  };
}

export default function About({
  tabTitle,
  pageTitle,
  description,
  image,
  colorPrimary,
  colorSecondary
}: AboutPageProps) {
  return (
    <AboutPage
      tabTitle={tabTitle}
      pageTitle={pageTitle}
      description={description}
      image={image}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
    />
  );
}
