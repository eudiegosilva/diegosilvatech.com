import { Container, GradientTitle } from 'components';
import { ColorTypes } from 'components/gradient-title/gradient-title.types';

import * as s from './page-content.styles';

export type PageContentProps = {
  children: React.ReactNode;
  pageTitle?: string;
  colorPrimary?: ColorTypes;
  colorSecondary?: ColorTypes;
};

const PageContent = ({ children, pageTitle }: PageContentProps) => {
  return (
    <s.ContentWrapper>
      <Container>
        {pageTitle && <GradientTitle>{pageTitle}</GradientTitle>}
        {children}
      </Container>
    </s.ContentWrapper>
  );
};

export { PageContent };
