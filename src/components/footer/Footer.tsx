import { links, LinkProps } from './footer-links';

import * as s from './footer.styles';

export type FooterProps = {};

const renderAnchor = (link: LinkProps) => {
  if (link.url.startsWith('http')) {
    return (
      <s.TextAnchor as="a" key={link.title} href={link.url}>
        {link.title}
      </s.TextAnchor>
    );
  }

  return <s.TextAnchor as="a">{link.title}</s.TextAnchor>;
};

const Footer = () => {
  return (
    <s.FooterContainer>
      <s.FooterWrapper>{links.map(renderAnchor)}</s.FooterWrapper>
    </s.FooterContainer>
  );
};

export { Footer };
