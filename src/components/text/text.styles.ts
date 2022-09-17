import { styled } from 'styles/stitches.config';

import * as element from './text.elements.styles';

export const Text = styled('p', {
  p: { ...element.p },
  span: { ...element.span },
  strong: { ...element.strong },
  a: { ...element.a },
  h1: { ...element.h1 },
  h2: { ...element.h2 },
  h3: { ...element.h3 },
  blockquote: { ...element.blockquote },
  kbd: { ...element.kbd },

  variants: {
    variant: {
      p: element.p,
      span: element.span,
      strong: element.strong,
      a: element.a,
      h1: element.h1,
      h2: element.h2,
      h3: element.h3,
      blockquote: element.blockquote,
      kbd: element.kbd
    }
  }
});

export const Anchor = styled('a', {});
