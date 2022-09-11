import Link from 'next/link';

import { Container } from 'components';

import { links, LinkProps } from './footer-links';

import * as s from './footer.styles';

export type FooterProps = {};

const renderAnchor = (link: LinkProps) => {
  if (link.url.startsWith('http')) {
    return (
      <s.Anchor key={link.title} href={link.url} target="_blank">
        {link.title}
      </s.Anchor>
    );
  }

  return (
    <Link key={link.title} href={link.url} passHref>
      <s.Anchor>{link.title}</s.Anchor>
    </Link>
  );
};

const Footer = () => {
  return (
    <s.FooterWrapper>
      <Container>{links.map(renderAnchor)}</Container>
    </s.FooterWrapper>
  );
};

export { Footer };
