import Head from 'next/head';

import { Navbar, PageWrapper } from 'components';

import * as s from './about.page.styles';

export type AboutPageProps = {
  title: string;
  description: string;
  image: string;
};

const AboutPage = ({ description, image, title }: AboutPageProps) => {
  return (
    <PageWrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://diegosilva.tech" property="og:url" />
        <meta content={`https://diegosilva.tech${image}`} property="og:image" />
      </Head>
      <Navbar />
      <h1>AboutPage</h1>
    </PageWrapper>
  );
};

export { AboutPage };
