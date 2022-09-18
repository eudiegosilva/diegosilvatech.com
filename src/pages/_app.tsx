import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../../public/css/prism.css';

import { Command } from 'components';

import { globalStyles } from 'styles';
import { darkTheme, lightTheme } from 'styles/stitches.config';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        dark: darkTheme.className,
        light: lightTheme.className
      }}
    >
      <Command>
        <Component {...pageProps} />
      </Command>
    </ThemeProvider>
  );
}
