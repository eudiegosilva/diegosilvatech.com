import { Navbar, Footer } from 'components';

import * as s from './page-structure.styles';

export type PageStructureProps = {
  children: React.ReactNode;
  alignment?: 'center' | 'top';
};

const PageStructure = ({ children, alignment = 'top' }: PageStructureProps) => {
  return (
    <s.StructureWrapper>
      <Navbar />
      <s.ChildrenWrapper alignment={alignment}>{children}</s.ChildrenWrapper>
      <Footer />
    </s.StructureWrapper>
  );
};

export { PageStructure };
