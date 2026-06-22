'use client';

import { useEffect } from 'react';

/**
 * Modal Component
 * 
 * A flexible modal dialog component with backdrop overlay, close button, 
 * and support for closing via escape key or clicking outside.
 * 
 * Props:
 * @param {boolean} isOpen - Modal visibility state
 * @param {Function} onClose - Callback to close modal
 * @param {React.ReactNode} children - Modal content
 * @param {string} [title=""] - Modal title
 * @param {boolean} [closeOnEscape=true] - Close on escape key press
 * @param {boolean} [closeOnBackdropClick=true] - Close on backdrop click
 * @param {string} [size="md"] - Modal size (sm, md, lg, xl)
 * @param {string} [className=""] - Additional CSS classes
 */

export default function Modal({
  isOpen,
  onClose,
  children,
  title = '',
  closeOnEscape = true,
  closeOnBackdropClick = true,
  size = 'md',
  className = '',
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (closeOnEscape && e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeOnEscape, onClose]);

  if (!isOpen) return null;

  const sizeStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  const handleBackdropClick = (e) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-in fade-in"
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full mx-4 ${sizeStyles[size]} animate-in zoom-in-95 ${className}`}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Content */}
        <div className="px-6 py-4">
          {children}
        </div>
      </div>
    </div>
  );
}
