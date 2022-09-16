import { TypographySpacingsTypes } from '../typography.types';

import * as s from './paragraph.styles';

type ParagraphProps = {
  children: React.ReactNode;
  margin?: TypographySpacingsTypes;
};

const Paragraph = ({ children, margin }: ParagraphProps) => (
  <s.Paragraph css={{ margin: margin ? `$${margin} 0` : '$lg 0' }}>
    {children}
  </s.Paragraph>
);

export { Paragraph };
