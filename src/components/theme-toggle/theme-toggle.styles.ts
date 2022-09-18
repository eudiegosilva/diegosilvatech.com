import * as TogglePrimitive from '@radix-ui/react-toggle';

import { styled } from 'styles/stitches.config';

export const IconWrapper = styled('div', {
  cursor: 'pointer'
});

export const ThemeToggleWrapper = styled(TogglePrimitive.Root, {
  all: 'unset'
});
