import { AboutPage, AboutPageProps } from 'page-structure';

export async function getStaticProps() {
  return {
    props: {
      tabTitle: 'Sobre | Diego Silva',
      pageTitle: 'Aprender & Compartilhar',
      description:
        'Diego Silva é um Desenvolvedor Frontend Brasileiro. Ele vive atualmente em São Paulo e trabalhar com Developer Experience no Banco Neon. Ele é apaixonado por UI e UX. Possui grande experiência com processos seletivos e mentoria de carreira. É fundador e Community Manager da 99juniorsHe.',
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
