import { styled } from 'styles/stitches.config';

export const PageMain = styled('main', {
  border: '2px solid red',
  // '@bp2': { padding: '$nav-height-desktop' },
  // padding: '$nav-height-mobile',
  overflow: 'hidden',
  flex: '1 1'
});

// export const PageContainer = styled(PageMain, {
//   alignItems: 'center',
//   display: 'flex',
//   margin: '0 auto',
//   '@bp2': { width: 800 }
// });

export const ContainerContent = styled('div', {
  fontSize: '$md',
  lineHeight: '$200',
  color: '$text-secondary',
  position: 'relative',
  zIndex: '$base',
  height: '100%',
  width: '100%'
  // padding: '$lg 0',
  // '& .iframe-wrap': {
  //   height: '0',
  //   marginBottom: '$lg',
  //   overflow: 'hidden',
  //   paddingBottom: '56.25%',
  //   paddingTop: '$xx',
  //   position: 'relative'
  // },
  // '& .iframe-wrap iframe': {
  //   border: '0',
  //   height: '100%',
  //   left: '0',
  //   position: 'absolute',
  //   top: '0',
  //   width: '100%'
  // },
  // '& .post-image-caption': {
  //   color: '$text-secondary',
  //   textAlign: 'center',
  //   fontStyle: 'italic',
  //   fontSize: '$sm'
  // },
  // '& .post-image-full': {
  //   margin: '$lg 0 0',
  //   maxWidth: 'initial',
  //   width: '70vw',
  //   '@bp2': { marginLeft: 'calc(-1 * (70vw - 760px) / 2)' },
  //   '@bp4': { marginLeft: 0 }
  // },
  // '& .side-by-side': {
  //   display: 'flex',
  //   width: '90vw',
  //   margin: '40px 0',
  //   flexDirection: 'row',
  //   '@bp2': { marginLeft: 'calc(-1 * (90vw - 760px) / 2)' },
  //   '@bp4': { marginLeft: 0, flexDirection: 'column' }
  // },
  // '& .side-by-side-img': {
  //   minWidth: '50%',
  //   '@bp2': { minWidth: '100%' },
  //   '@bp4': {}
  // },
  // '& .side-by-side-caption': {
  //   color: '$secondary',
  //   textAlign: 'center',
  //   fontStyle: 'italic',
  //   fontSize: '$sm',
  //   marginTop: -30
  // },
});

export const ContentWrapper = styled('main', {
  margin: '0 auto',
  maxWidth: '760px',
  padding: '0 $lg',
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

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@bp2': { flexDirection: 'row' }
});

export const Section = styled('section', {
  marginTop: '0px',
  width: 'auto',
  '@bp2': { width: '48%' }
});
