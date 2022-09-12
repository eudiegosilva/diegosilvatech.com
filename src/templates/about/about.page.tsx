import Image from 'next/image';

import diegosilvatechImage from 'assets/images/diegosilvatech.jpg';
import { PageContent, PageHead, PageHeadProps, PageStructure } from 'templates';

import * as s from './about.page.styles';

export type AboutPageProps = {
  pageTitle: string;
} & PageHeadProps;

const AboutPage = ({
  description,
  image,
  tabTitle,
  pageTitle
}: AboutPageProps) => {
  return (
    <PageStructure>
      <PageHead description={description} image={image} tabTitle={tabTitle} />
      <PageContent pageTitle={pageTitle}>
        <s.ContentWrapper>
          <s.Section>
            <Image
              className="author-image"
              alt="diegosilvatech"
              src={diegosilvatechImage}
              width="336"
              height="336"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
              priority
            />
          </s.Section>
          <s.Section>
            <s.Paragraph>
              <strong>Hey, I'm Diego Silva</strong> I started working with
              technology in 2017, as a UX / UI intern and that's where my
              passion for the frontend started.
            </s.Paragraph>
            <s.Paragraph>
              I am currently a <strong>Senior Frontend Developer</strong> at{' '}
              <a href="https://neon.com.br/" target="blank">
                Neon Bank
              </a>{' '}
              focused on improving the <strong>development experience</strong>{' '}
              of our developers.
            </s.Paragraph>
            <s.Paragraph>
              I'm also a <strong>Community Manager</strong> for{' '}
              <a href="https://discord.com/invite/P5YmPENeqd" target="blank">
                99juniors
              </a>
              , an amazing community for budding developers.
            </s.Paragraph>
            <s.Paragraph>
              I currently live in <strong>São Paulo</strong>, Brazil with my
              beloved wife.
            </s.Paragraph>
          </s.Section>
        </s.ContentWrapper>
      </PageContent>
    </PageStructure>
  );
};

export { AboutPage };
