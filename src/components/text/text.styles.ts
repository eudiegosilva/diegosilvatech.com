import { styled } from 'styles/stitches.config';

import * as element from './element.styles';

export const Text = styled('p', {
  p: { ...element.p },
  strong: { ...element.strong },
  h1: { ...element.h1 },
  h2: { ...element.h2 },
  h3: { ...element.h3 },

  variants: {
    variant: {
      p: element.p,
      strong: element.strong,
      h1: element.h1,
      h2: element.h2,
      h3: element.h3
    }
  }
});
