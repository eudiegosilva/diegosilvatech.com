import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../../public/css/prism.css';

import { Command } from 'components';

import { globalStyles } from 'styles';
import { crimsonTheme, violetTheme } from 'styles/stitches.config';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="default"
      value={{
        default: 'default',
        crimson: crimsonTheme.className,
        violet: violetTheme.className
      }}
    >
      <Command>
        <Component {...pageProps} />
      </Command>
    </ThemeProvider>
  );
}
