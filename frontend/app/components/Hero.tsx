export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 dark:from-green-900 dark:to-green-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Find Your Perfect HomeStay
        </h2>
        <p className="text-lg md:text-xl mb-8 text-green-100">
          Discover unique accommodations and guest experiences from hosts around the world
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100">
            Browse Listings
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-green-700">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
