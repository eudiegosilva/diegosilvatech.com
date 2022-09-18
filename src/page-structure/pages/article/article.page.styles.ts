import { Text } from 'components';

import { styled } from 'styles/stitches.config';

export const ArticleDate = styled(Text, {
  fontStyle: 'italic'
});

export const Divider = styled('hr', {
  color: 'red',
  border: '0.5px solid $brand-primary-mid'
});

export const ArticleContent = styled('div', {
  fontSize: '16px',
  lineHeight: '32px',
  color: '$text-secondary',
  position: 'relative',
  zIndex: '$base',
  height: '100%',
  padding: '0',
  '& .article-image-full': {
    margin: '$lg 0 0',
    maxWidth: 'initial',
    width: '70vw',
    '@greater-lg': {
      marginLeft: 'calc(-1 * (70vw - 768px) / 2)'
    }
  },
  '& .side-by-side-wrapper': {
    display: 'flex',
    width: '100%',
    margin: '$xx 0',
    flexDirection: 'column',
    '@greater-lg': {
      flexDirection: 'row',
      width: '70vw',
      marginLeft: 'calc(-1 * (70vw - 768px) / 2)'
    }
  },
  '& .side-by-side-image': {
    minWidth: '50%',
    '@greater-lg': { minWidth: '100%' }
  },
  '& .side-by-side-caption': {
    color: '$text-secondary',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '14px',
    marginTop: '-$xx'
  }
});

export const ArticleContainer = styled('div', {});

export const ArticleHTMLContentWrapper = styled('div', {});
