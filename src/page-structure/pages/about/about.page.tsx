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
                <strong>Olá, Eu sou o Diego Silva</strong> Eu comecei a
                trabalhar com tecnologia em 2017, como estagiário de UX / UI,
                onde minha paixão pela área Frontend começou.
              </Text>
              <Text>
                Atualmente sou <strong>Desenvolvedor Frontend Senior</strong> no{' '}
                <Text as="a" href="https://neon.com.br/" target="_blank">
                  Banco Neon
                </Text>{' '}
                com foco na melhoria da{' '}
                <strong>Experiência de Desenvolvimento</strong> de nossos
                desenvolvedores.
              </Text>
              <Text>
                Também sou <strong>Community Manager</strong> da{' '}
                <Text
                  as="a"
                  href="https://discord.com/invite/P5YmPENeqd"
                  target="_blank"
                >
                  99juniors
                </Text>
                , uma comunidade incrível para desenvolvedores iniciantes.
              </Text>
              <Text>
                Moro atualmente em <strong>São Paulo</strong>, Brasil com minha
                amada esposa.
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
