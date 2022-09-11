import { ShortcutHome } from 'components';
import { Page, PageProps } from 'templates';

export type HomePageProps = Omit<PageProps, 'children' | 'pageTitle'>;

const HomePage = ({ description, image, tabTitle }: HomePageProps) => {
  return (
    <Page description={description} image={image} tabTitle={tabTitle}>
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
    </Page>
  );
};

export { HomePage };
