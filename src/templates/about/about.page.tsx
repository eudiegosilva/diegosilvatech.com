import Head from 'next/head';

import { Navbar, PageWrapper } from 'components';

import * as s from './about.page.styles';

export type AboutPageProps = {
  tabTitle: string;
  pageTitle: string;
  description: string;
  image: string;
};

const AboutPage = ({
  description,
  image,
  tabTitle,
  pageTitle
}: AboutPageProps) => {
  return (
    <PageWrapper>
      <Head>
        <title>{tabTitle}</title>
        <meta content={tabTitle} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://diegosilva.tech" property="og:url" />
        <meta content={`https://diegosilva.tech${image}`} property="og:image" />
      </Head>
      <Navbar />
      <s.PageContainer>
        <s.ContentContainer>
          <s.ContentWrapper>
            <h1>AboutPage</h1>
          </s.ContentWrapper>
        </s.ContentContainer>
      </s.PageContainer>
    </PageWrapper>
  );
};

export { AboutPage };
