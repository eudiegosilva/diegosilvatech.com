// @ts-nocheck
import { Text } from 'components';

import { ColorTypes } from './gradient-title.types';

export type GradientTitleProps = {
  children: React.ReactNode;
  colorPrimary?: ColorTypes;
  colorSecondary?: ColorTypes;
};

const GradientTitle = ({
  children,
  colorPrimary = 'brand-primary-11',
  colorSecondary = 'accent-violet'
}: GradientTitleProps) => {
  return (
    <Text
      as="h1"
      css={{
        backgroundSize: '100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        MozBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        MozTextFillColor: 'transparent',
        WebkitBoxDecorationBreak: 'clone',
        backgroundImage: `linear-gradient(135deg, $${colorPrimary} 0%, $${colorSecondary} 100%)`,
        '&::selection': {
          background: `$${colorPrimary}`,
          color: '#000000',
          WebkitTextFillColor: '#000000'
        }
      }}
    >
      {children}
    </Text>
  );
};

export { GradientTitle };
