import Image from 'next/image';

import { diegosilvatech } from 'assets/images';
import { Text } from 'components';
import {
  PageContent,
  PageHead,
  PageHeadProps,
  PageContentProps,
  PageContainer
} from 'page-structure';

import { SectionBio } from './section-bio/section-bio';
import { SectionCareer } from './section-career/section-career';

import * as s from './about.page.styles';

type GradiendColorsProps = Pick<
  PageContentProps,
  'colorPrimary' | 'colorSecondary'
>;

export type AboutPageProps = {
  pageTitle: string;
} & PageHeadProps &
  GradiendColorsProps;

const AboutPage = ({
  description,
  image,
  tabTitle,
  pageTitle,
  colorPrimary,
  colorSecondary
}: AboutPageProps) => {
  return (
    <PageContainer>
      <PageHead description={description} image={image} tabTitle={tabTitle} />
      <PageContent
        pageTitle={pageTitle}
        colorPrimary={colorPrimary}
        colorSecondary={colorSecondary}
      >
        <s.ContentWrapper>
          <s.SectionWrapper>
            <s.Section>
              <Image
                className="author-image"
                alt="diegosilvatech"
                src={diegosilvatech}
                width="336"
                height="336"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
                priority
              />
            </s.Section>
            <s.Section>
              <Text>
                <strong>Hey, I'm Diego Silva</strong> I started working with
                technology in 2017, as a UX / UI intern and that's where my
                passion for the frontend started.
              </Text>
              <Text>
                I am currently a <strong>Senior Frontend Developer</strong> at{' '}
                <a href="https://neon.com.br/" target="blank">
                  Neon Bank
                </a>{' '}
                focused on improving the <strong>development experience</strong>{' '}
                of our developers.
              </Text>
              <Text>
                I'm also a <strong>Community Manager</strong> for{' '}
                <a href="https://discord.com/invite/P5YmPENeqd" target="blank">
                  99juniors
                </a>
                , an amazing community for budding developers.
              </Text>
              <Text>
                I currently live in <strong>São Paulo</strong>, Brazil with my
                beloved wife.
              </Text>
            </s.Section>
          </s.SectionWrapper>

          <SectionBio description={description} />
          <SectionCareer />
        </s.ContentWrapper>
      </PageContent>
    </PageContainer>
  );
};

export { AboutPage };
