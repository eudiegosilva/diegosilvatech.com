import { Text } from 'components';

import { links, LinkProps } from './footer-links';

import * as s from './footer.styles';

export type FooterProps = {};

const renderAnchor = (link: LinkProps) => {
  if (link.url.startsWith('http')) {
    return (
      <Text as="a" key={link.title} href={link.url} style={{ border: 'none' }}>
        {link.title}
      </Text>
    );
  }

  return (
    <Text as="a" style={{ border: 'none' }}>
      {link.title}
    </Text>
  );
};

const Footer = () => {
  return (
    <s.FooterContainer>
      <s.FooterWrapper>{links.map(renderAnchor)}</s.FooterWrapper>
    </s.FooterContainer>
  );
};

export { Footer };
