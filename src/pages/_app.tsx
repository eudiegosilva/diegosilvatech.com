import type { AppProps } from 'next/app';

import { Command } from 'components';

import { globalStyles } from 'styles';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Command>
      <Component {...pageProps} />
    </Command>
  );
}
