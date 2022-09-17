import { DOMAttributes } from 'react';

import { TextElementTypes, TextSpacingsTypes } from '../text/text.types';

import * as s from './text.styles';

type TextProps = {
  children?: React.ReactNode;
  margin?: TextSpacingsTypes;
  as?: TextElementTypes;
} & DOMAttributes<HTMLParagraphElement>;

const Text = ({ children, as = 'p', margin, ...rest }: TextProps) => (
  <s.Text
    as={as}
    variant={as}
    css={{ margin: margin ? `$${margin} 0` : '$lg 0' }}
    {...rest}
  >
    {children}
  </s.Text>
);

export { Text };
