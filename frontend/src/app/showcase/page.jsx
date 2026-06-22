'use client';

import { useState } from 'react';
import { Button, Input, Modal, Toast, Loader } from '@/components/ui';

export default function ShowcasePage() {
  // Button states
  const [buttonLoading, setButtonLoading] = useState(false);

  // Input states
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState('');

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  // Toast states
  const [toastVisible, setToastVisible] = useState(false);
  const [toastType, setToastType] = useState('info');
  const [toastMessage, setToastMessage] = useState('');

  // Loader state
  const [showLoader, setShowLoader] = useState(false);

  // Button handlers
  const handleButtonClick = async () => {
    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
      showToast('success', 'Button clicked successfully!');
    }, 2000);
  };

  // Input handlers
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmailValue(value);

    if (value && !value.includes('@')) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  // Toast handlers
  const showToast = (type, message) => {
    setToastType(type);
    setToastMessage(message);
    setToastVisible(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Component Showcase
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Deliverable 2: Reusable UI Component Library
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Buttons Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Button Component
            </h2>
            <div className="space-y-8">
              {/* Primary Buttons */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                  Primary Variant
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" onClick={handleButtonClick} loading={buttonLoading}>
                    {buttonLoading ? 'Processing' : 'Primary Button'}
                  </Button>
                  <Button variant="primary" size="sm">
                    Small Primary
                  </Button>
                  <Button variant="primary" size="lg">
                    Large Primary
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled Primary
                  </Button>
                </div>
              </div>

              {/* Secondary Buttons */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                  Secondary Variant
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" onClick={() => showToast('info', 'Secondary button clicked!')}>
                    Secondary Button
                  </Button>
                  <Button variant="secondary" size="sm">
                    Small Secondary
                  </Button>
                  <Button variant="secondary" size="lg">
                    Large Secondary
                  </Button>
                  <Button variant="secondary" disabled>
                    Disabled Secondary
                  </Button>
                </div>
              </div>

              {/* Danger Buttons */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                  Danger Variant
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="danger" onClick={() => setConfirmModal(true)}>
                    Delete Item
                  </Button>
                  <Button variant="danger" size="sm">
                    Small Danger
                  </Button>
                  <Button variant="danger" size="lg">
                    Large Danger
                  </Button>
                  <Button variant="danger" disabled>
                    Disabled Danger
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Input Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Input Component
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="your@email.com"
                value={emailValue}
                onChange={handleEmailChange}
                error={emailError}
                required
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                onChange={(e) => {}}
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 000-0000"
                onChange={(e) => {}}
              />

              <Input
                label="Disabled Input"
                placeholder="This input is disabled"
                disabled
                value="Disabled state"
                onChange={() => {}}
              />

              <Input
                label="Number Input"
                type="number"
                placeholder="Enter a number"
                onChange={(e) => {}}
              />
            </div>
          </div>
        </section>

        {/* Modal Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Modal Component
            </h2>
            <div className="space-y-4">
              <Button variant="primary" onClick={() => setModalOpen(true)}>
                Open Modal
              </Button>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Features: Click outside to close, press Escape key, or click the X button
              </p>
            </div>
          </div>
        </section>

        {/* Toast Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Toast Component
            </h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  onClick={() => showToast('success', '✅ Operation completed successfully!')}
                >
                  Show Success Toast
                </Button>

                <Button
                  variant="danger"
                  onClick={() => showToast('error', '❌ An error occurred. Please try again.')}
                >
                  Show Error Toast
                </Button>

                <Button
                  variant="secondary"
                  onClick={() => showToast('info', 'ℹ️ This is an informational message.')}
                >
                  Show Info Toast
                </Button>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Toast auto-dismisses after 3 seconds
              </p>
            </div>
          </div>
        </section>

        {/* Loader Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Loader Component
            </h2>

            {/* Loader Sizes */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
                Different Sizes
              </h3>
              <div className="flex gap-16 flex-wrap">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">Small</p>
                  <Loader size="sm" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">Medium</p>
                  <Loader size="md" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">Large</p>
                  <Loader size="lg" />
                </div>
              </div>
            </div>

            {/* Loader Colors */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
                Different Colors
              </h3>
              <div className="flex gap-16 flex-wrap">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">Blue</p>
                  <Loader color="blue" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">Red</p>
                  <Loader color="red" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">Green</p>
                  <Loader color="green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">Gray</p>
                  <Loader color="gray" />
                </div>
              </div>
            </div>

            {/* Centered Loader */}
            <div>
              <Button
                variant="secondary"
                onClick={() => setShowLoader(!showLoader)}
              >
                {showLoader ? 'Hide' : 'Show'} Centered Loader
              </Button>
              {showLoader && (
                <div className="mt-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8">
                  <Loader centered size="lg" text="Loading data..." />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Modals */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Welcome to Component Library"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            This is a demonstration of the Modal component from our reusable UI component library.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Features:</strong> Try pressing Escape, clicking outside the modal, or clicking the X button to close it.
            </p>
          </div>
          <div className="flex gap-3 pt-4">
            <Button
              variant="primary"
              onClick={() => {
                setModalOpen(false);
                showToast('success', 'Modal closed!');
              }}
            >
              Close Modal
            </Button>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={confirmModal}
        onClose={() => setConfirmModal(false)}
        title="Confirm Delete"
        size="sm"
      >
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <Button
              variant="danger"
              onClick={() => {
                setConfirmModal(false);
                showToast('error', 'Item deleted!');
              }}
            >
              Delete
            </Button>
            <Button variant="secondary" onClick={() => setConfirmModal(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      {/* Toast */}
      <Toast
        isVisible={toastVisible}
        onDismiss={() => setToastVisible(false)}
        message={toastMessage}
        type={toastType}
        duration={3000}
      />
    </div>
  );
}
