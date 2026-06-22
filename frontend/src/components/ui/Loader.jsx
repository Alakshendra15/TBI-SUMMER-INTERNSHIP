'use client';

/**
 * Loader Component
 * 
 * A spinning loader component with configurable size and layout options.
 * 
 * Props:
 * @param {"sm"|"md"|"lg"} [size="md"] - Loader size
 * @param {boolean} [centered=false] - Center loader in container
 * @param {string} [text=""] - Loading text to display
 * @param {string} [className=""] - Additional CSS classes
 * @param {string} [color="blue"] - Loader color (blue, red, green, gray)
 */

export default function Loader({
  size = 'md',
  centered = false,
  text = '',
  className = '',
  color = 'blue',
}) {
  const sizeStyles = {
    sm: 'w-6 h-6 border-2',
    md: 'w-12 h-12 border-4',
    lg: 'w-16 h-16 border-4',
  };

  const colorStyles = {
    blue: 'border-blue-200 dark:border-blue-700 border-t-blue-600 dark:border-t-blue-400',
    red: 'border-red-200 dark:border-red-700 border-t-red-600 dark:border-t-red-400',
    green: 'border-green-200 dark:border-green-700 border-t-green-600 dark:border-t-green-400',
    gray: 'border-gray-200 dark:border-gray-700 border-t-gray-600 dark:border-t-gray-400',
  };

  const containerClass = centered ? 'flex flex-col items-center justify-center min-h-64' : '';

  return (
    <div className={`${containerClass} ${className}`}>
      <div
        className={`rounded-full animate-spin ${sizeStyles[size]} ${colorStyles[color]}`}
      />
      {text && (
        <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium">
          {text}
        </p>
      )}
    </div>
  );
}
