import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { diegosilvatech } from 'assets/images';
import { Icon } from 'components';
import { AnimateSharedLayout } from 'framer-motion';
import { useKBar } from 'kbar';

import * as s from './navbar.styles';

type NavbarProps = { disableCommand?: boolean };

const Navbar = ({ disableCommand = false }: NavbarProps) => {
  const [hoveredItem, setHoveredItem] = useState('');
  const pages = ['About', 'Articles'];
  const router = useRouter();
  const { query } = useKBar();
  return (
    <s.HeaderContainer>
      <s.HeaderWrapper>
        <AnimateSharedLayout>
          <Link href="/" passHref>
            <s.ButtonLogo as="a">
              <Image
                src={diegosilvatech}
                alt="@diegosilvatech logo"
                width={32}
                height={32}
                className="image-teste"
              />
            </s.ButtonLogo>
          </Link>

          <s.NavbarWrapper>
            <s.List>
              {pages.map(page => {
                const pagePath = `/${page.toLowerCase()}`;
                const isHovered = hoveredItem === page;

                return (
                  <s.ListItem key={page}>
                    <Link href={pagePath} passHref>
                      <s.ItemLink>
                        <s.ItemContainer
                          onHoverStart={() => setHoveredItem(page)}
                          onHoverEnd={() => setHoveredItem('')}
                          css={
                            router.pathname == pagePath
                              ? {
                                  color: '$text-primary',
                                  '&::after': { opacity: 1 }
                                }
                              : {}
                          }
                        >
                          {isHovered && (
                            <s.ItemHovered
                              layoutId="nav"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                          {page}
                        </s.ItemContainer>
                      </s.ItemLink>
                    </Link>
                  </s.ListItem>
                );
              })}
            </s.List>
          </s.NavbarWrapper>

          <s.CommandButtonWrapper>
            <s.ButtonHeader
              as="button"
              type="button"
              aria-label="Command"
              onClick={disableCommand ? () => null : query.toggle}
            >
              <Icon.CommandIcon />
            </s.ButtonHeader>
          </s.CommandButtonWrapper>
        </AnimateSharedLayout>
      </s.HeaderWrapper>
    </s.HeaderContainer>
  );
};

export { Navbar };
