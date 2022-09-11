import { ShortcutHome } from 'components';
import { Page, PageProps } from 'templates';

export type HomePageProps = Omit<PageProps, 'children'>;

const HomePage = ({
  description,
  image,
  tabTitle,
  pageTitle
}: HomePageProps) => {
  return (
    <Page
      description={description}
      image={image}
      tabTitle={tabTitle}
      pageTitle={pageTitle}
    >
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
