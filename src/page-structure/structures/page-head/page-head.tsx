import Head from 'next/head';

import * as s from './page-head.styles';

export type PageHeadProps = {
  description: string;
  image: string;
  tabTitle: string;
};

const PageHead = ({ description, image, tabTitle }: PageHeadProps) => {
  return (
    <s.HeadWrapper>
      <Head>
        <title>{tabTitle}</title>
        <meta content={tabTitle} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://diegosilva.tech" property="og:url" />
        <meta content={`https://diegosilva.tech${image}`} property="og:image" />
      </Head>
    </s.HeadWrapper>
  );
};

export { PageHead };
