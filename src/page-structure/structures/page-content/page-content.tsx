import { Container, GradientTitle } from 'components';
import { ColorTypes } from 'components/gradient-title/gradient-title.types';

import * as s from './page-content.styles';

export type PageContentProps = {
  children: React.ReactNode;
  pageTitle?: string;
  colorPrimary?: ColorTypes;
  colorSecondary?: ColorTypes;
};

const PageContent = ({
  children,
  pageTitle,
  colorPrimary,
  colorSecondary
}: PageContentProps) => {
  return (
    <s.ContentWrapper
      css={{
        '& ::selection': {
          background: `$${colorPrimary}`,
          color: '#000000',
          WebkitTextFillColor: '#000000'
        }
      }}
    >
      <Container>
        {pageTitle && (
          <GradientTitle
            colorPrimary={colorPrimary}
            colorSecondary={colorSecondary}
          >
            {pageTitle}
          </GradientTitle>
        )}
        {children}
      </Container>
    </s.ContentWrapper>
  );
};

export { PageContent };
