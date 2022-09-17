import { DOMAttributes } from 'react';

import { TypographySpacingsTypes } from '../typography.types';

import * as s from './paragraph.styles';

type ParagraphProps = {
  children?: React.ReactNode;
  margin?: TypographySpacingsTypes;
} & DOMAttributes<HTMLParagraphElement>;

const Paragraph = ({ children, margin, ...rest }: ParagraphProps) => (
  <s.Paragraph css={{ margin: margin ? `$${margin} 0` : '$lg 0' }} {...rest}>
    {children}
  </s.Paragraph>
);

export { Paragraph };
