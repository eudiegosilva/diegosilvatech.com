import { motion } from 'framer-motion';

import { styled } from 'styles/stitches.config';

export const FeaturedArticleWrapper = styled('a', {
  border: '0',
  width: '100%',
  marginLeft: '$lg',
  textDecoration: 'none',
  '&:hover': { opacity: 1 },
  '&:first-child': { marginLeft: 0 }
});

export const AnimationWrapper = styled(motion.div, {
  position: 'relative',
  width: '100%',
  padding: '$lg',
  zIndex: '$base'
});

export const AnimationHovered = styled(motion.div, {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: '$brand-primary-03',
  borderRadius: '$md',
  zIndex: '$behind',
  width: '100%'
});

export const ArticleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
});

export const ImageContainer = styled('div', {
  borderRadius: '8px',
  width: '100%',
  height: '180px',
  marginBottom: '$lg',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  filter: 'grayscale(1)',
  transition: '$fast',
  '&:hover': { filter: 'grayscale(0)' },
  '@greater-lg': { width: '100%' }
});

export const ArticleContent = styled('div', {
  width: '100%',
  marginRight: '$lg',
  '@greater-lg': { width: '100%', marginRight: 0 }
});
