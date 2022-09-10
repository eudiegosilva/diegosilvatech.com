import { useState, useEffect } from 'react';

import { Button } from 'components';
import { useKBar } from 'kbar';

export type ShortcutHomeProps = { disableCommand?: boolean };

const ShortcutHome = ({ disableCommand }: ShortcutHomeProps) => {
  const { query } = useKBar();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    const isMac = /(Mac)/i.test(navigator.userAgent);
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

    if (isMobile) {
      return (
        <Button handleClick={disableCommand ? () => null : query.toggle}>
          Tap to start →
        </Button>
      );
    } else if (isMac) {
      return (
        <Button handleClick={disableCommand ? () => null : query.toggle}>
          Press <kbd>⌘</kbd> <kbd>K</kbd> to start →
        </Button>
      );
    }
  }
  return (
    <Button handleClick={disableCommand ? () => null : query.toggle}>
      Press <kbd>ctrl</kbd> <kbd>K</kbd> to start →
    </Button>
  );
};

export { ShortcutHome };