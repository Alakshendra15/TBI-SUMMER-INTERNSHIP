'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

/**
 * Theme Provider Wrapper
 * Provides theme context to the entire application
 * Enables dark/light mode functionality with next-themes
 */
export function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
