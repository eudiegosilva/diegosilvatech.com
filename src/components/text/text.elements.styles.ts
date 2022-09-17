import { ConfigProps } from 'styles/stitches.config';

export const p: ConfigProps = {
  fontFamily: '$body',
  margin: '$lg 0',
  color: '$text-secondary',
  marginBottom: '$lg',
  lineHeight: '$170'
};

export const strong: ConfigProps = {
  fontFamily: '$body',
  color: '$text-primary',
  fontWeight: '$500'
};

export const span: ConfigProps = {
  color: '$text-secondary'
};

export const a: ConfigProps = {
  fontFamily: '$body',
  color: '$text-primary',
  borderBottom: '0.5px solid $text-secondary',
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
  color: '$text-primary'
};

export const h2: ConfigProps = {
  fontFamily: '$heading',
  fontSize: '$xl',
  color: '$text-primary'
};

export const h3: ConfigProps = {
  color: '$text-primary',
  fontSize: '$md',
  margin: '$lg 0 0',

  a: {
    color: '$text-primary',
    fontSize: '$md',
    margin: '$lg 0 0'
  }
};

export const blockquote: ConfigProps = {
  borderLeft: '4px solid $brand-primary-high',
  color: '$text-secondary',
  fontStyle: 'italic',
  margin: '0',
  paddingLeft: '$lg'
};

export const kbd: ConfigProps = {
  fontFamily: '$body',
  color: '$base-black',
  background: '$text-secondary',
  padding: '1px 5px',
  borderRadius: '$sm',
  fontSize: '$sm',
  transition: '$default',
  '&:hover kbd': { background: '$text-primary' }
};
