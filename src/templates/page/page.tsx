import Head from 'next/head';

import { Navbar } from 'components';

import * as s from './page.styles';

export type PageProps = {
  children: React.ReactNode;
  description: string;
  image: string;
  pageTitle: string;
  tabTitle: string;
};

const Page = ({
  children,
  description,
  image,
  pageTitle,
  tabTitle
}: PageProps) => {
  return (
    <s.PageWrapper>
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
        <s.PageContent>
          <s.ContentWrapper>{children}</s.ContentWrapper>
        </s.PageContent>
      </s.PageContainer>
    </s.PageWrapper>
  );
};

export { Page };
