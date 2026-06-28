'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

/**
 * Theme Toggle Component
 * 
 * Provides a button to switch between light and dark themes
 * 
 * Props:
 * @param {string} [className=""] - Additional CSS classes
 */
export default function ThemeToggle({ className = '' }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
    );
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Current theme: ${theme}`}
    >
      {/* Sun Icon */}
      <svg
        className={`absolute w-5 h-5 text-yellow-500 transition-opacity duration-300 ${
          theme === 'light' ? 'opacity-100' : 'opacity-0'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-10.243a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM4.464 4.465a1 1 0 010 1.414l-.707.707A1 1 0 012.343 4.757l.707-.707a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>

      {/* Moon Icon */}
      <svg
        className={`absolute w-5 h-5 text-blue-500 transition-opacity duration-300 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </button>
  );
}
