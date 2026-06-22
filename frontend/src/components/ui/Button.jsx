'use client';

/**
 * Button Component
 * 
 * A versatile, reusable button component with multiple variants and states.
 * 
 * Props:
 * @param {React.ReactNode} children - Button content/text
 * @param {Function} onClick - Click handler callback
 * @param {"primary"|"secondary"|"danger"} [variant="primary"] - Button style variant
 * @param {boolean} [disabled=false] - Disable button state
 * @param {string} [className=""] - Additional CSS classes
 * @param {"button"|"submit"|"reset"} [type="button"] - Button HTML type
 * @param {string} [size="md"] - Button size (sm, md, lg)
 * @param {boolean} [loading=false] - Show loading state
 */

export default function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
  type = 'button',
  size = 'md',
  loading = false,
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed',
    secondary:
      'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400',
    danger:
      'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500 disabled:bg-red-400 disabled:cursor-not-allowed',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedStyles}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
