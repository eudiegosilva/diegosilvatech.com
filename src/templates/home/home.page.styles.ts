import { styled } from 'styles/stitches.config';

export const PageWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '100vh',
  position: 'relative',
  zIndex: 0
});

export const PageContent = styled('main', {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 }
});

export const PostWrapper = styled('div', {
  fontSize: '16px',
  lineHeight: '32px',
  color: '$text-secondary',
  position: 'relative',
  zIndex: 1,
  height: '100%',
  padding: '$lg 0',
  '& .iframe-wrap': {
    height: '0',
    marginBottom: '$lg',
    overflow: 'hidden',
    paddingBottom: '56.25%',
    paddingTop: '$xx',
    position: 'relative'
  },
  '& .iframe-wrap iframe': {
    border: '0',
    height: '100%',
    left: '0',
    position: 'absolute',
    top: '0',
    width: '100%'
  },
  '& .post-image-caption': {
    color: '$text-secondary',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '$sm'
  },
  '& .post-image-full': {
    margin: '$lg 0 0',
    maxWidth: 'initial',
    width: '70vw',
    '@bp2': {
      marginLeft: 'calc(-1 * (70vw - 760px) / 2)'
    },
    '@bp4': {
      marginLeft: 0
    }
  },
  '& .side-by-side': {
    display: 'flex',
    width: '90vw',
    margin: '40px 0',
    flexDirection: 'row',
    '@bp2': {
      marginLeft: 'calc(-1 * (90vw - 760px) / 2)'
    },
    '@bp4': {
      marginLeft: 0,
      flexDirection: 'column'
    }
  },
  '& .side-by-side-img': {
    minWidth: '50%',
    '@bp2': {
      minWidth: '100%'
    },
    '@bp4': {}
  },
  '& .side-by-side-caption': {
    color: '$secondary',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '$sm',
    marginTop: -30
  }
});

export const PostContent = styled('main', {
  margin: '0 auto',
  maxWidth: '760px',
  padding: '0 $lg'
});
