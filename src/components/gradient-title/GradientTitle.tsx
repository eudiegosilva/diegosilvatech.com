import { ColorTypes } from './gradient-title.types';

import * as s from './gradient-title.styles';

export type GradientTitleProps = {
  children: React.ReactNode;
  colorPrimary?: ColorTypes;
  colorSecondary?: ColorTypes;
};

const GradientTitle = ({
  children,
  colorPrimary = 'brand-primary-high',
  colorSecondary = 'brand-secondary-high'
}: GradientTitleProps) => {
  return (
    <s.GradientTitleWrapper
      css={{
        backgroundImage: `linear-gradient(135deg, $${colorPrimary} 0%, $${colorSecondary} 100%)`,
        '&::selection': {
          background: `$${colorPrimary}`,
          color: '#000000',
          WebkitTextFillColor: '#000000'
        }
      }}
    >
      {children}
    </s.GradientTitleWrapper>
  );
};

export { GradientTitle };
