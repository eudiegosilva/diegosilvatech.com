import { styled } from 'styles/stitches.config';

export const FeaturedArticlesGroup = styled('div', {
  margin: '10px 0 0 -20px',
  '@greater-lg': { display: 'flex', justifyContent: 'space-between' }
});

export const AllArticlesList = styled('ul', {
  listStyle: 'none',
  margin: '10px 0 0',
  padding: '0',
  border: '2px solid red'
});
