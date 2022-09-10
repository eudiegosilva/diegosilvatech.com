import Head from 'next/head';

import { Navbar, PageWrapper, ShortcutHome } from 'components';

import * as s from './home.page.styles';

export type HomePageProps = {
  tabTitle: string;
  description: string;
  image: string;
};

const HomePage = ({ description, image, tabTitle }: HomePageProps) => {
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
            <div>
              <h1>Diego Silva</h1>
              <p>
                <strong>
                  Senior Frontend Developer at{' '}
                  <a href="https://neon.com.br/" target="blank">
                    Neon Bank
                  </a>
                  .<br />
                </strong>
                {description}
              </p>
              <ShortcutHome />
            </div>
          </s.ContentWrapper>
        </s.ContentContainer>
      </s.PageContainer>
    </PageWrapper>
  );
};

export { HomePage };
