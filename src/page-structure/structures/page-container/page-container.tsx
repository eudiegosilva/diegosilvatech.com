import { Navbar, Footer } from 'components';

import * as s from './page-container.styles';

export type PageContainerProps = {
  children: React.ReactNode;
  alignment?: 'center' | 'top';
};

const PageContainer = ({ children, alignment = 'top' }: PageContainerProps) => {
  return (
    <s.StructureWrapper>
      <Navbar />
      <s.ChildrenWrapper alignment={alignment}>{children}</s.ChildrenWrapper>
      <Footer />
    </s.StructureWrapper>
  );
};

export { PageContainer };
