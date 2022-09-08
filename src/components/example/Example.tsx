import * as s from './example.styles';

export type ExampleProps = {
  children: React.ReactNode;
};

const Example = ({ children }: ExampleProps) => {
  return <s.ExampleWrapper>{children}</s.ExampleWrapper>;
};

export { Example };
