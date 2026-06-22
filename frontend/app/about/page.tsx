import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About HomeStay
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-8">
              Welcome to HomeStay, your trusted platform for authentic accommodations and unforgettable travel experiences. 
              Founded with a passion for connecting travelers with welcoming hosts around the world, HomeStay has grown to become 
              a community of thousands of verified properties and satisfied guests.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-8 mt-6">
              Our mission is to provide safe, comfortable, and authentic homestay experiences that go beyond traditional hotels. 
              We believe in the power of genuine connections and the value of local experiences. Every listing on our platform 
              is carefully vetted to ensure quality and safety for our guests.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
