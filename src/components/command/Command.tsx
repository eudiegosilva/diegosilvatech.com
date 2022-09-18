// @ts-nocheck
import { useRef, useState } from 'react';

import { useRouter } from 'next/router';

import * as icon from 'assets/icons';
import { Toast } from 'components';
import { KBarProvider, KBarPortal } from 'kbar';
import Lottie from 'lottie-react';

import { RenderResults } from './render-results/RenderResults';

import * as s from './command.styles';

export type CommandProps = {
  children: React.ReactNode;
};

const Command = ({ children }: CommandProps) => {
  const copyLinkRef = useRef();
  const homeRef = useRef();
  const aboutRef = useRef();
  const articlesRef = useRef();
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  const iconSize = { width: 20, height: 20 };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
  };

  const actions = [
    {
      id: 'copy',
      name: 'Copy Link',
      shortcut: ['l'],
      keywords: 'copy-link',
      section: 'General',
      perform: copyLink,
      icon: (
        <Lottie
          lottieRef={copyLinkRef}
          style={iconSize}
          animationData={icon.copyLinkIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: (
        <Lottie
          lottieRef={homeRef}
          style={iconSize}
          animationData={icon.homeIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['g', 'a'],
      keywords: 'go-about',
      section: 'Go To',
      perform: () => router.push('/about'),
      icon: (
        <Lottie
          lottieRef={aboutRef}
          style={iconSize}
          animationData={icon.aboutIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'articles',
      name: 'Articles',
      shortcut: ['g', 'a'],
      keywords: 'go-articles',
      section: 'Go To',
      perform: () => router.push('/articles'),
      icon: (
        <Lottie
          lottieRef={articlesRef}
          style={iconSize}
          animationData={icon.articleIcon}
          loop={false}
          autoplay={false}
        />
      )
    }
  ];

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <s.Positioner>
            <s.Animator>
              <s.Search placeholder="Digite um comando ou pequise..." />
              <RenderResults />
            </s.Animator>
          </s.Positioner>
        </KBarPortal>
        {children}
      </KBarProvider>
      <Toast
        title="Link copiado :)"
        description="Compartilhe com todo mundo!"
        variant="success"
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  );
};

export { Command };
