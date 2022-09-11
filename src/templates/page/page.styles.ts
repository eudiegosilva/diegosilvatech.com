import { styled } from 'styles/stitches.config';

import { Container } from 'components/container/container.styles';

export const PageWrapper = styled('div', {
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column'
});

export const PageContainer = styled(Container, {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  flex: 1
});

export const PageContent = styled('div', {
  fontSize: '$md',
  lineHeight: '$200'
});

export const ContentWrapper = styled('main', {
  '& ::selection': {
    background: '$brand-primary-high',
    WebkitTextFillColor: '#000000',
    color: '$base-black'
  }
});

export const TitleGradient = styled('h1', {
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  MozTextFillColor: 'transparent',
  WebkitBoxDecorationBreak: 'clone',
  backgroundImage:
    'linear-gradient(135deg, $brand-primary-high 0%, $brand-secondary-high 100%)'
});
