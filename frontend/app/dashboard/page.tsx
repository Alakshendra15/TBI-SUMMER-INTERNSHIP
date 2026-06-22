import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Dashboard
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-8">
              Welcome to your personal dashboard! This is where you can manage your profile, view your bookings, 
              track your reservations, and access your account settings. From here, you can easily navigate to all 
              your important information and make changes to your preferences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-8 mt-6">
              Your dashboard provides a comprehensive overview of your HomeStay experience. Monitor your upcoming trips, 
              review past bookings, manage your payment methods, and communicate with hosts. Everything you need to 
              make the most of your homestay adventures is right here, organized and accessible.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
