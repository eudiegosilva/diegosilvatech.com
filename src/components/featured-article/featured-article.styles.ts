import { motion } from 'framer-motion';

import { styled } from 'styles/stitches.config';

export const FeaturedArticleWrapper = styled('a', {
  border: '0',
  width: '370px',
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
  background: '$brand-primary-mid',
  borderRadius: '$md',
  zIndex: -1
});

export const ArticleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column'
});

export const ImageContainer = styled('div', {
  borderRadius: '8px',
  width: '370px',
  height: '180px',
  marginBottom: '$lg',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  filter: 'grayscale(1)',
  transition: '$fast',
  '&:hover': { filter: 'grayscale(0)' }
});

export const ArticleContent = styled('div', {
  maxWidth: '450px',
  marginRight: '$lg',
  '@greater-lg': { maxWidth: '100%', marginRight: 0 }
});
