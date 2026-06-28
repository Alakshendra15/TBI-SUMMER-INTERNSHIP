import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-green-600 dark:text-green-400 transition-colors duration-300">
              HomeStay
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
              About
            </Link>
            <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
              Dashboard
            </Link>
            <Link href="/showcase" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
              Components
            </Link>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/login" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
              Sign In
            </Link>
            <button className="px-4 py-2 bg-green-600 dark:bg-green-700 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
