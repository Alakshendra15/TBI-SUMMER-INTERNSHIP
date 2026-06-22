export default function BookingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          My Bookings
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Booking ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Room
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Check-in
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Check-out
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                  #BK001
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                  Deluxe Suite
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  2026-06-25
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  2026-06-28
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                    Confirmed
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300">
                    View
                  </button>
                </td>
              </tr>
              
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                  #BK002
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                  Standard Room
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  2026-07-10
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  2026-07-15
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
