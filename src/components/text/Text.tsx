// @ts-nocheck
import { DOMAttributes, AnchorHTMLAttributes } from 'react';

import Link from 'next/link';

import { TextElementTypes, TextSpacingsTypes } from '../text/text.types';

import { ConfigProps } from 'styles/stitches.config';

import * as s from './text.styles';

type AnchorProps = {
  children?: React.ReactNode;
  href: string;
  css?: ConfigProps;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type TargetTypes = '_blank' | '_parent' | '_self' | '_top';

export type TextProps = {
  children?: React.ReactNode;
  margin?: TextSpacingsTypes;
  as?: TextElementTypes;
  href?: string;
  target?: TargetTypes;
  css?: ConfigProps;
} & DOMAttributes<HTMLParagraphElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const Anchor = ({ children, href, target, css }: AnchorProps) => {
  return (
    <Link key={href} href={href} passHref>
      <s.Anchor css={css} target={target}>
        {children}
      </s.Anchor>
    </Link>
  );
};

const Text = ({
  children,
  as = 'p',
  href = 'https://github.com/diegosilvatech',
  target = '_blank',
  margin,
  css,
  ...rest
}: TextProps) => {
  const defaultCSS = { margin: margin ? `$${margin} 0` : '$lg 0' };
  const renderAnchor = () => {
    return (
      <Anchor href={href} target="_blank" css={css}>
        {children}
      </Anchor>
    );
  };

  if (as === 'a') return renderAnchor();

  return (
    <s.Text
      as={as}
      variant={as}
      href={href}
      target={target}
      css={css ? css : defaultCSS}
      {...rest}
    >
      {children}
    </s.Text>
  );
};

export { Text };
