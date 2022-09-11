import { Container } from 'components';

import * as s from './page-content.styles';

export type PageContentProps = { children: React.ReactNode };

const PageContent = ({ children }: PageContentProps) => {
  return (
    <s.ContentWrapper>
      <Container>{children}</Container>
    </s.ContentWrapper>
  );
};

export { PageContent };
