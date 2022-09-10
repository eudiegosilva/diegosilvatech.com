import { FontVariantTypes } from './typography.types';

import * as s from './typography.styles';

export type TypographyProps = {
  children: React.ReactNode;
  variant?: FontVariantTypes;
};

const Typography = ({ children, variant = 'p' }: TypographyProps) => (
  <s.TypographyWrapper variant={variant} as={variant}>
    {children}
  </s.TypographyWrapper>
);

export { Typography };
