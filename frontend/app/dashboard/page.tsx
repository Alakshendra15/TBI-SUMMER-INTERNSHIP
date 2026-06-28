"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Booking {
  _id: string;
  guestName: string;
  email: string;
  phone: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequest: string;
  status: string;
}

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const [bookings, setBookings] = useState<Booking[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to connect to backend");
        setLoading(false);
      });
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      <Navbar />

      <main className="flex-grow">
        <section
          className={`py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
            darkMode ? "bg-gray-900" : "bg-gray-50"
          }`}
        >
          <div className="max-w-6xl mx-auto">

            <div className="flex justify-end mb-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`px-4 py-2 rounded-lg border font-medium transition ${
                  darkMode
                    ? "bg-white text-black border-gray-300"
                    : "bg-black text-white border-black"
                }`}
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>

            <h1
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Dashboard
            </h1>

            <p
              className={`text-lg leading-8 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Welcome to your StaySense dashboard. Here you can monitor
              bookings received from your backend API and MongoDB database.
            </p>

            {loading && (
              <p className="mt-6 text-blue-500 text-lg">
                Loading bookings...
              </p>
            )}

            {error && (
              <p className="mt-6 text-red-500 text-lg">
                {error}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

              <div
                className={`p-6 rounded-lg shadow ${
                  darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <h3 className="text-xl font-semibold">
                  Total Bookings
                </h3>

                <p className="text-4xl mt-3 font-bold">
                  {bookings.length}
                </p>
              </div>

              <div
                className={`p-6 rounded-lg shadow ${
                  darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <h3 className="text-xl font-semibold">
                  Latest Guest
                </h3>

                <p className="text-xl mt-3">
                  {bookings.length
                    ? bookings[0].guestName
                    : "No Data"}
                </p>
              </div>

              <div
                className={`p-6 rounded-lg shadow ${
                  darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <h3 className="text-xl font-semibold">
                  Latest Status
                </h3>

                <p className="text-xl mt-3">
                  {bookings.length
                    ? bookings[0].status
                    : "-"}
                </p>
              </div>

            </div>
                        {/* Booking Table */}

            <div
              className={`mt-12 rounded-lg shadow overflow-hidden ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="p-6">
                <h2
                  className={`text-2xl font-bold mb-6 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Latest Bookings
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr
                        className={
                          darkMode
                            ? "bg-gray-700 text-white"
                            : "bg-gray-200 text-gray-900"
                        }
                      >
                        <th className="p-3 text-left">Guest</th>
                        <th className="p-3 text-left">Room</th>
                        <th className="p-3 text-left">Guests</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">Check In</th>
                        <th className="p-3 text-left">Check Out</th>
                      </tr>
                    </thead>

                    <tbody>
                      {bookings.length === 0 && !loading ? (
                        <tr>
                          <td
                            colSpan={6}
                            className={`text-center p-6 ${
                              darkMode
                                ? "text-gray-300"
                                : "text-gray-600"
                            }`}
                          >
                            No bookings found.
                          </td>
                        </tr>
                      ) : (
                        bookings.slice(0, 5).map((booking) => (
                          <tr
                            key={booking._id}
                            className={`border-b ${
                              darkMode
                                ? "border-gray-700 text-white"
                                : "border-gray-200 text-gray-900"
                            }`}
                          >
                            <td className="p-3">{booking.guestName}</td>

                            <td className="p-3">{booking.roomType}</td>

                            <td className="p-3">{booking.guests}</td>

                            <td className="p-3">
                              <span
                                className={`px-3 py-1 rounded-full text-sm ${
                                  booking.status === "Confirmed"
                                    ? "bg-green-500 text-white"
                                    : "bg-yellow-500 text-white"
                                }`}
                              >
                                {booking.status}
                              </span>
                            </td>

                            <td className="p-3">
                              {new Date(
                                booking.checkIn
                              ).toLocaleDateString()}
                            </td>

                            <td className="p-3">
                              {new Date(
                                booking.checkOut
                              ).toLocaleDateString()}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
                      </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}