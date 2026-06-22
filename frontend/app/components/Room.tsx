interface RoomProps {
  id: number;
  name: string;
  type: string;
  price: number;
  capacity: number;
  amenities: string[];
  image: string;
}

export default function Room({
  id,
  name,
  type,
  price,
  capacity,
  amenities,
  image,
}: RoomProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56 bg-gray-300 dark:bg-gray-700">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {type}
            </p>
          </div>
          <span className="text-2xl font-bold text-green-600 dark:text-green-400">
            ${price}
          </span>
        </div>
        
        <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
          <span className="mr-4">👥 {capacity} guests</span>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Amenities
          </h4>
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity) => (
              <span
                key={amenity}
                className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}
