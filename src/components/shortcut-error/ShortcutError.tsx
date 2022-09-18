import { useState, useEffect } from 'react';

import { Button } from 'components';
import { Text } from 'components';
import { useKBar } from 'kbar';

export type ShortcutErrorProps = { disableCommand?: boolean };

const ShortcutError = ({ disableCommand }: ShortcutErrorProps) => {
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
          Tap to home →
        </Button>
      );
    } else if (isMac) {
      return (
        <Button handleClick={disableCommand ? () => null : query.toggle}>
          Press <Text as="kbd">⌘</Text> <Text as="kbd">K</Text> to home →
        </Button>
      );
    }
  }
  return (
    <Button handleClick={disableCommand ? () => null : query.toggle}>
      Press <Text as="kbd">ctrl</Text> <Text as="kbd">K</Text> to home →
    </Button>
  );
};

export { ShortcutError };
