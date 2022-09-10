import * as s from './page-wrapper.styles';

export type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <s.PageWrapper>{children}</s.PageWrapper>;
};

export { PageWrapper };
