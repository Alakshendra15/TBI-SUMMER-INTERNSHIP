export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Reviews
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Write a Review
            </h2>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white mb-4"
              rows={5}
              placeholder="Share your experience..."
            />
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Submit Review
            </button>
          </div>

          <hr className="my-8 dark:border-gray-700" />

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Recent Reviews
            </h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    John Doe
                  </h3>
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Great experience! The room was clean and comfortable. Highly recommended!
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Jane Smith
                  </h3>
                  <span className="text-yellow-400">★★★★</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Very nice stay. Only minor issue with the WiFi connection, otherwise perfect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
