import { styled } from 'styles/stitches.config';

export const StructureWrapper = styled('div', {
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column'
});

export const ChildrenWrapper = styled('div', {
  flex: '1',
  variants: {
    alignment: {
      top: {},
      center: { display: 'flex', alignItems: 'center' }
    }
  }
});
