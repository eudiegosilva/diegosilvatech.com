import * as s from './paragraph.styles';

type ParagraphProps = { children: React.ReactNode };

const Paragraph = ({ children }: ParagraphProps) => (
  <s.Paragraph>{children}</s.Paragraph>
);

export { Paragraph };
