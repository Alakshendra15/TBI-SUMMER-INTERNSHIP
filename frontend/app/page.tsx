import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Room from "./components/Room";
import Footer from "./components/Footer";
import { roomsData } from "./data/rooms";

export default function Home() {
  const listings = [
    {
      id: 1,
      title: "Cozy Mountain Cottage",
      description: "A beautiful cottage nestled in the mountains with stunning views and modern amenities.",
      image: "https://images.unsplash.com/photo-1551632786-de41ec6a05ae?w=500&h=400&fit=crop",
      price: 120,
      rating: 4.8,
      location: "Colorado, USA",
    },
    {
      id: 2,
      title: "Urban Loft in Downtown",
      description: "Modern loft in the heart of the city, perfect for exploring local culture and dining.",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop",
      price: 95,
      rating: 4.6,
      location: "New York, USA",
    },
    {
      id: 3,
      title: "Beachside Villa",
      description: "Luxury villa steps away from pristine beaches with private pool and ocean access.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop",
      price: 180,
      rating: 4.9,
      location: "Bali, Indonesia",
    },
    {
      id: 4,
      title: "Historic European Flat",
      description: "Charming apartment in a historic building with classic European architecture and charm.",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop",
      price: 110,
      rating: 4.7,
      location: "Paris, France",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <main className="flex-grow">
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Listings
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
              Explore our hand-picked selection of exceptional homestays
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {listings.map((listing) => (
                <Card
                  key={listing.id}
                  {...listing}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Available Rooms
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
              Browse our premium room collection and find the perfect stay
            </p>
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
