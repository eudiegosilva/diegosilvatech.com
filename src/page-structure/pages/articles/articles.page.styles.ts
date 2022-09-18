import { motion } from 'framer-motion';

import { styled } from 'styles/stitches.config';

import { Text } from 'components/text/text.styles';

export const FeaturedArticlesGroup = styled('div', {
  margin: '$sm 0 0 -$lg',
  '@greater-lg': {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

export const AllArticlesList = styled('ul', {
  listStyle: 'none',
  margin: '$sm 0 0',
  padding: '0'
});

export const ListItem = styled('li', {
  borderBottom: '1px solid $brand-primary-mid',
  '&:last-child': { border: 0 },
  display: 'flex',
  transition: '$fast',
  '&:hover': { borderColor: 'transparent' }
});

export const TextAnchor = styled(Text, {
  textDecoration: 'none',
  color: '$text-primary',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  '@greater-lg': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export const TextTitle = styled(Text, {
  display: 'block',
  maxWidth: '500px',
  fontWeight: 700,
  fontSize: '$md',
  lineHeight: '$200',
  textAlign: 'left'
});

export const TextDate = styled(Text, {
  color: '$text-secondary',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 500,
  fontSize: '$sm',
  marginBottom: '$xs',
  minWidth: '100px',
  '@greater-lg': { justifyContent: 'flex-end' }
});

export const AnimationWrapper = styled(motion.span, {
  border: '0',
  color: '$text-secondary',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '$md 0',
  width: '100%',
  opacity: 1,
  transition: '$fast',
  textDecoration: 'none',
  position: 'relative',
  '&:hover': { span: { color: '$text-primary' } },
  zIndex: '$base'
});

export const AnimationHovered = styled(motion.span, {
  position: 'absolute',
  top: '-1px',
  left: '-$lg',
  right: '-$lg',
  bottom: '-1px',
  background: '$brand-primary-mid',
  borderRadius: '$md',
  zIndex: -1
});

export const ArticleItem = styled(ListItem, {
  [`& ${AnimationWrapper}`]: {
    flexDirection: 'column',
    '@greater-lg': { flexDirection: 'row' }
  }
});
