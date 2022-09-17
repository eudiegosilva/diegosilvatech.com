import Head from 'next/head';

import * as s from './page-head.styles';

export type PageHeadProps = {
  description: string;
  image: string;
  tabTitle: string;
  canonicalUrl?: string;
};

const PageHead = ({
  description,
  image,
  tabTitle,
  canonicalUrl
}: PageHeadProps) => {
  return (
    <s.HeadWrapper>
      <Head>
        <title>{tabTitle}</title>
        <meta content={tabTitle} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://diegosilvatech.com" property="og:url" />
        <meta
          content={`https://diegosilvatech.com${image}`}
          property="og:image"
        />

        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Head>
    </s.HeadWrapper>
  );
};

export { PageHead };
