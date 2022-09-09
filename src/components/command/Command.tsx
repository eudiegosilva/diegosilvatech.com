import { useRef, useState } from 'react';

import { useRouter } from 'next/router';

import { Toast } from 'components';
import { KBarProvider, KBarPortal } from 'kbar';
import Lottie from 'lottie-react';

import * as icon from './icons';
import { RenderResults } from './render-results/RenderResults';

import * as s from './command.styles';

export type CommandProps = {
  children: React.ReactNode;
};

const Command = ({ children }: CommandProps) => {
  const copyLinkRef = useRef();
  const emailRef = useRef();
  const sourceRef = useRef();
  const homeRef = useRef();
  const aboutRef = useRef();
  const articlesRef = useRef();
  const projectsRef = useRef();
  const talksRef = useRef();
  const podcastsRef = useRef();
  const investingRef = useRef();
  const usesRef = useRef();
  const reminderRef = useRef();
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  const iconSize = { width: 24, height: 24 };

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
      id: 'email',
      name: 'Send Email',
      shortcut: ['e'],
      keywords: 'send-email',
      section: 'General',
      perform: () => router.push('/contact'),
      icon: (
        <Lottie
          lottieRef={emailRef}
          style={iconSize}
          animationData={icon.emailIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'source',
      name: 'View Source',
      shortcut: ['s'],
      keywords: 'view-source',
      section: 'General',
      perform: () =>
        window.open('https://github.com/zenorocha/zenorocha.com', '_blank'),
      icon: (
        <Lottie
          lottieRef={sourceRef}
          style={iconSize}
          animationData={icon.sourceIcon}
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
      shortcut: ['g', 'b'],
      keywords: 'go-articles',
      section: 'Go To',
      perform: () => router.push('/articles'),
      icon: (
        <Lottie
          lottieRef={articlesRef}
          style={iconSize}
          animationData={icon.articlesIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['g', 'p'],
      keywords: 'go-projects',
      section: 'Go To',
      perform: () => router.push('/projects'),
      icon: (
        <Lottie
          lottieRef={projectsRef}
          style={iconSize}
          animationData={icon.projectsIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'talks',
      name: 'Talks',
      shortcut: ['g', 't'],
      keywords: 'go-talks',
      section: 'Go To',
      perform: () => router.push('/talks'),
      icon: (
        <Lottie
          lottieRef={talksRef}
          style={iconSize}
          animationData={icon.talksIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'podcasts',
      name: 'Podcasts',
      shortcut: ['g', 'c'],
      keywords: 'go-podcasts',
      section: 'Go To',
      perform: () => router.push('/podcasts'),
      icon: (
        <Lottie
          lottieRef={podcastsRef}
          style={iconSize}
          animationData={icon.podcastsIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'investing',
      name: 'Investing',
      shortcut: ['g', 'i'],
      keywords: 'go-investing',
      section: 'Go To',
      perform: () => router.push('/investing'),
      icon: (
        <Lottie
          lottieRef={investingRef}
          style={iconSize}
          animationData={icon.investingIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'uses',
      name: 'Uses',
      shortcut: ['g', 'u'],
      keywords: 'go-uses',
      section: 'Go To',
      perform: () => router.push('/uses'),
      icon: (
        <Lottie
          lottieRef={usesRef}
          style={iconSize}
          animationData={icon.usesIcon}
          loop={false}
          autoplay={false}
        />
      )
    },
    {
      id: 'reminder',
      name: 'Reminder',
      shortcut: ['g', 'r'],
      keywords: 'go-reminder',
      section: 'Go To',
      perform: () => router.push('/reminder'),
      icon: (
        <Lottie
          lottieRef={reminderRef}
          style={iconSize}
          animationData={icon.reminderIcon}
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
              <s.Search />
              <RenderResults />
            </s.Animator>
          </s.Positioner>
        </KBarPortal>
        {children}
      </KBarProvider>
      <Toast
        title="Link copiado :)"
        description="Compartilhe com todo mundo!"
        isSuccess
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  );
};

export { Command };
