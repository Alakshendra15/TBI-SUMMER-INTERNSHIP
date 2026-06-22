import Room from "../components/Room";
import { roomsData } from "../data/rooms";

export default function AvailabilityPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Room Availability
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Check Availability
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="date"
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="Check-in Date"
              />
              <input
                type="date"
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="Check-out Date"
              />
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Available Rooms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomsData.map((room) => (
              <Room
                key={room.id}
                id={room.id}
                name={room.name}
                type={room.type}
                price={room.price}
                capacity={room.capacity}
                amenities={room.amenities}
                image={room.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
