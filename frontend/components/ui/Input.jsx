'use client';

import { useId } from 'react';

/**
 * Input Component
 * 
 * A controlled input component with label, placeholder, and error support.
 * 
 * Props:
 * @param {string} value - Current input value
 * @param {Function} onChange - Callback when value changes
 * @param {string} [label=""] - Label text for the input
 * @param {string} [placeholder=""] - Placeholder text
 * @param {string} [error=""] - Error message to display
 * @param {"text"|"email"|"password"|"number"|"tel"} [type="text"] - Input type
 * @param {boolean} [disabled=false] - Disable input
 * @param {string} [className=""] - Additional CSS classes
 * @param {boolean} [required=false] - Mark as required
 */

export default function Input({
  value,
  onChange,
  label = '',
  placeholder = '',
  error = '',
  type = 'text',
  disabled = false,
  className = '',
  required = false,
}) {
  const inputId = useId();

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`w-full px-4 py-2 border-2 rounded-lg transition-all duration-200 focus:outline-none dark:bg-gray-800 dark:text-white dark:border-gray-700 ${
          error
            ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500'
            : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:focus:border-blue-400'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed text-gray-500 dark:bg-gray-900' : 'bg-white'}`}
      />

      {error && (
        <p className="mt-1 text-sm font-medium text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
