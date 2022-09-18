import { links } from './footer-links';

import * as s from './footer.styles';

export type FooterProps = {};

const Footer = () => {
  return (
    <s.FooterContainer>
      <s.FooterWrapper>
        {links.map(link => {
          if (link.url.startsWith('http')) {
            return (
              <s.TextAnchor as="a" key={link.title} href={link.url}>
                {link.title}
              </s.TextAnchor>
            );
          }

          return (
            <s.TextAnchor key={link.title} as="a">
              {link.title}
            </s.TextAnchor>
          );
        })}
      </s.FooterWrapper>
    </s.FooterContainer>
  );
};

export { Footer };
