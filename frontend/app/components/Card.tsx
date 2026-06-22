interface CardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  location: string;
}

export default function Card({
  id,
  title,
  description,
  image,
  price,
  rating,
  location,
}: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 bg-gray-300 dark:bg-gray-700">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {location}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
              ${price}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">/night</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-gray-700 dark:text-gray-300">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
        <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
}
