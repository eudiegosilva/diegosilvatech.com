import { ShortcutHome } from 'components';
import { Text } from 'components';
import {
  PageContainer,
  PageHead,
  PageHeadProps,
  PageContent
} from 'page-structure';

export type HomePageProps = PageHeadProps;

const HomePage = ({ description, image, tabTitle }: HomePageProps) => {
  return (
    <PageContainer alignment="center">
      <PageHead description={description} image={image} tabTitle={tabTitle} />
      <PageContent>
        <div>
          <Text as={'h1'}>Diego Silva</Text>
          <Text>
            <strong>
              Senior Frontend Developer at{' '}
              <a href="https://neon.com.br/" target="blank">
                Neon Bank
              </a>
              .
              <br />
            </strong>
            {description}
          </Text>
          <ShortcutHome />
        </div>
      </PageContent>
    </PageContainer>
  );
};

export { HomePage };
