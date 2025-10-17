import { Calendar, Clock, Users, MapPin, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function ReservationsPage() {
  // Sample reservation data - replace with your actual data fetching
  const reservations = [
    {
      id: 1,
      restaurantName: "The Golden Spoon",
      restaurantImage:
        "/images/restaurants/restaurant-2.jpg",
      date: "2024-10-15",
      time: "7:30 PM",
      guests: 4,
      location: "Downtown",
      specialRequests:
        "Table by the window for anniversary dinner. Please prepare a surprise dessert if possible.",
      status: "confirmed",
    },
    {
      id: 2,
      restaurantName: "Sakura Sushi Bar",
      restaurantImage:
        "/images/restaurants/restaurant-3.jpg",
      date: "2024-10-18",
      time: "6:00 PM",
      guests: 2,
      location: "Midtown",
      specialRequests:
        "No shellfish allergies. Prefer counter seating to watch the chef prepare sushi.",
      status: "confirmed",
    },
    {
      id: 3,
      restaurantName: "Bella Vista Italian",
      restaurantImage:
        "/images/restaurants/restaurant-2.jpg",
      date: "2024-10-22",
      time: "8:00 PM",
      guests: 6,
      location: "Little Italy",
      specialRequests:
        "Business dinner meeting. Please ensure a quiet corner table away from high-traffic areas.",
      status: "pending",
    },
    {
      id: 4,
      restaurantName: "Ocean Breeze Seafood",
      restaurantImage:
        "/images/restaurants/restaurant-1.jpg",
      date: "2024-10-25",
      time: "7:00 PM",
      guests: 3,
      location: "Waterfront",
      specialRequests:
        "One vegetarian guest in the party. Also celebrating a birthday - any special touches would be appreciated!",
      status: "confirmed",
    },
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-orange-300 text-orange-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 pt-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">
            My Reservations
          </h1>
          <p className="text-gray-600">
            Manage and view your upcoming restaurant reservations
          </p>
        </div>

        {/* Reservations Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Restaurant Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  width={500}
                  height={300}
                  src={reservation.restaurantImage}
                  alt={reservation.restaurantName}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium capitalize ${getStatusColor(
                      reservation.status,
                    )}`}
                  >
                    {reservation.status}
                  </span>
                </div>
              </div>

              {/* Reservation Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="mb-1 text-xl font-bold text-gray-900">
                    {reservation.restaurantName}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="mr-1 h-4 w-4" />
                    {reservation.location}
                  </div>
                </div>

                {/* Date and Time Info */}
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="mr-2 h-5 w-5 text-blue-500" />
                    <div>
                      <p className="text-sm font-medium">Date</p>
                      <p className="text-sm">{formatDate(reservation.date)}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="mr-2 h-5 w-5 text-green-500" />
                    <div>
                      <p className="text-sm font-medium">Time</p>
                      <p className="text-sm">{reservation.time}</p>
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div className="mb-4 flex items-center text-gray-700">
                  <Users className="mr-2 h-5 w-5 text-purple-500" />
                  <span className="text-sm">
                    <span className="font-medium">
                      {reservation.guests} guests
                    </span>
                  </span>
                </div>

                {/* Special Requests */}
                {reservation.specialRequests && (
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="flex items-start">
                      <MessageSquare className="mt-0.5 mr-2 h-5 w-5 shrink-0 text-orange-500" />
                      <div>
                        <p className="mb-1 text-sm font-medium text-gray-900">
                          Special Requests
                        </p>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {reservation.specialRequests}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-6 flex gap-3">
                  <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                    View Details
                  </button>
                  <button className="flex-1 rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-200">
                    Modify
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no reservations) */}
        {reservations.length === 0 && (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
              <Calendar className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="mb-2 text-xl font-medium text-gray-900">
              No reservations yet
            </h3>
            <p className="mb-6 text-gray-500">
              Start exploring restaurants and make your first reservation!
            </p>
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700">
              Browse Restaurants
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
