import Head from 'next/head';

import { Navbar, PageWrapper } from 'components';

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
        <s.ContainerContent>
          <s.ContentWrapper>
            {/* <s.TitleGradient>Test</s.TitleGradient> */}
            {children}
          </s.ContentWrapper>
        </s.ContainerContent>
      </s.PageContainer>
    </PageWrapper>
  );
};

export { Page };
