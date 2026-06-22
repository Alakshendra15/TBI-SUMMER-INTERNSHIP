import BookingForm from "../components/BookingForm";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Complete Your Booking
        </h1>
        
        <div className="mb-12">
          <BookingForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 border border-green-200 dark:border-green-800 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              📋 How to Book
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>1. Fill in your personal details</li>
              <li>2. Select your check-in and check-out dates</li>
              <li>3. Choose your preferred room type</li>
              <li>4. Submit the booking form</li>
              <li>5. You'll receive a confirmation email</li>
            </ul>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 border border-green-200 dark:border-green-800 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              ❓ Booking Policy
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
              <li>• Free cancellation up to 48 hours before check-in</li>
              <li>• Confirmation within 24 hours</li>
              <li>• Secure payment processing</li>
              <li>• 24/7 customer support</li>
              <li>• Best price guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
