import Head from 'next/head';

import { Navbar, Typography } from 'components';

import * as s from './home.page.styles';

export type HomePageProps = {
  title: string;
  description: string;
  image: string;
};

const HomeTemplate = ({ description, image, title }: HomePageProps) => {
  return (
    <s.PageWrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://diegosilva.tech" property="og:url" />
        <meta content={`https://diegosilva.tech${image}`} property="og:image" />
      </Head>
      <Navbar />
      <s.PageContent>
        <s.PostWrapper>
          <s.PostContent>
            <div>
              <Typography variant="h1">Diego Silva</Typography>
              <Typography variant="p">
                <Typography variant="strong">
                  Frontend Developer Sênior no{' '}
                  <a href="https://neon.com.br/" target="blank">
                    Banco Neon
                  </a>
                  .<br />
                </Typography>
                {description}
              </Typography>
            </div>
          </s.PostContent>
        </s.PostWrapper>
      </s.PageContent>
    </s.PageWrapper>
  );
};

export default HomeTemplate;
