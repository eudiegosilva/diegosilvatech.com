// @ts-nocheck
import { useRef, useState } from 'react';

import { useTheme } from 'next-themes';

import * as icon from 'assets/icons';
import Lottie from 'lottie-react';

import * as s from './theme-toggle.styles';

export type ThemeToggleProps = {};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(theme === 'dark');
  const boltOutlineRef = useRef();
  const boltSolidRef = useRef();

  const iconSize = { width: 20, height: 20 };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    darkTheme ? setTheme('light') : setTheme('dark');
  };

  return (
    <s.ThemeToggleWrapper onClick={toggleTheme}>
      {darkTheme ? (
        <s.IconWrapper
          onMouseEnter={() => boltOutlineRef.current?.play()}
          onMouseLeave={() => boltOutlineRef.current?.stop()}
        >
          <Lottie
            lottieRef={boltOutlineRef}
            style={iconSize}
            animationData={icon.boltOutlineIcon}
            loop={false}
            autoplay={false}
          />
        </s.IconWrapper>
      ) : (
        <s.IconWrapper
          onMouseEnter={() => boltSolidRef.current?.play()}
          onMouseLeave={() => boltSolidRef.current?.stop()}
        >
          <Lottie
            lottieRef={boltSolidRef}
            style={iconSize}
            animationData={icon.boltSolidIcon}
            loop={false}
            autoplay={false}
          />
        </s.IconWrapper>
      )}
    </s.ThemeToggleWrapper>
  );
};

export { ThemeToggle };
