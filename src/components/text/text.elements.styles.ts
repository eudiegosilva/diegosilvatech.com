import { small as articleSmall } from 'styles/global/article-styles';
import { ConfigProps } from 'styles/stitches.config';

export const p: ConfigProps = {
  fontFamily: '$body',
  margin: '$lg 0',
  color: '$text-contrast-low',
  marginBottom: '$lg',
  lineHeight: '$170'
};

export const strong: ConfigProps = {
  fontFamily: '$body',
  color: '$text-contrast-high',
  fontWeight: '$500'
};

export const span: ConfigProps = {
  color: '$text-contrast-low'
};

export const small: ConfigProps = {
  ...articleSmall
};

export const a: ConfigProps = {
  fontFamily: '$body',
  color: '$text-contrast-high',
  borderBottom: '0.5px solid $text-contrast-low',
  textDecoration: 'none',
  transition: '$fast',
  '&:hover, &:focus': {
    opacity: '0.8',
    cursor: 'pointer'
  }
};

export const h1: ConfigProps = {
  fontFamily: '$heading',
  fontSize: '$4x',
  lineHeight: '$115',
  margin: '0 0 $lg',
  color: '$text-contrast-high'
};

export const h2: ConfigProps = {
  fontFamily: '$heading',
  fontSize: '$xl',
  color: '$text-contrast-high'
};

export const h3: ConfigProps = {
  color: '$text-contrast-high',
  fontSize: '$md',
  margin: '$lg 0 0',

  a: {
    color: '$text-contrast-high',
    fontSize: '$md',
    margin: '$lg 0 0'
  }
};

export const blockquote: ConfigProps = {
  borderLeft: '4px solid $brand-primary-11',
  color: '$text-contrast-low',
  fontStyle: 'italic',
  margin: '0',
  paddingLeft: '$lg'
};

export const kbd: ConfigProps = {
  fontFamily: '$body',
  color: '$text-black',
  background: '$text-contrast-low',
  padding: '1px 5px',
  borderRadius: '$sm',
  fontSize: '$sm',
  transition: '$default',
  '&:hover kbd': { background: '$text-contrast-high' }
};
