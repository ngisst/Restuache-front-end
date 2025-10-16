import { Calendar, Clock, Users, MapPin, MessageSquare } from 'lucide-react'
import Image from 'next/image'

export default function ReservationsPage() {
  // Sample reservation data - replace with your actual data fetching
  const reservations = [
    {
      id: 1,
      restaurantName: "The Golden Spoon",
      restaurantImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=200&fit=crop",
      date: "2024-10-15",
      time: "7:30 PM",
      guests: 4,
      location: "Downtown",
      specialRequests: "Table by the window for anniversary dinner. Please prepare a surprise dessert if possible.",
      status: "confirmed"
    },
    {
      id: 2,
      restaurantName: "Sakura Sushi Bar",
      restaurantImage: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=200&fit=crop",
      date: "2024-10-18",
      time: "6:00 PM",
      guests: 2,
      location: "Midtown",
      specialRequests: "No shellfish allergies. Prefer counter seating to watch the chef prepare sushi.",
      status: "confirmed"
    },
    {
      id: 3,
      restaurantName: "Bella Vista Italian",
      restaurantImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=200&fit=crop",
      date: "2024-10-22",
      time: "8:00 PM",
      guests: 6,
      location: "Little Italy",
      specialRequests: "Business dinner meeting. Please ensure a quiet corner table away from high-traffic areas.",
      status: "pending"
    },
    {
      id: 4,
      restaurantName: "Ocean Breeze Seafood",
      restaurantImage: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&h=200&fit=crop",
      date: "2024-10-25",
      time: "7:00 PM",
      guests: 3,
      location: "Waterfront",
      specialRequests: "One vegetarian guest in the party. Also celebrating a birthday - any special touches would be appreciated!",
      status: "confirmed"
    }
  ]

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US')
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-orange-300 text-orange-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Reservations</h1>
          <p className="text-gray-600">Manage and view your upcoming restaurant reservations</p>
        </div>

        {/* Reservations Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Restaurant Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={reservation.restaurantImage}
                  alt={reservation.restaurantName}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(reservation.status)}`}>
                    {reservation.status}
                  </span>
                </div>
              </div>

              {/* Reservation Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {reservation.restaurantName}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {reservation.location}
                  </div>
                </div>

                {/* Date and Time Info */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                    <div>
                      <p className="font-medium text-sm">Date</p>
                      <p className="text-sm">{formatDate(reservation.date)}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 mr-2 text-green-500" />
                    <div>
                      <p className="font-medium text-sm">Time</p>
                      <p className="text-sm">{reservation.time}</p>
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div className="flex items-center text-gray-700 mb-4">
                  <Users className="w-5 h-5 mr-2 text-purple-500" />
                  <span className="text-sm">
                    <span className="font-medium">{reservation.guests} guests</span>
                  </span>
                </div>

                {/* Special Requests */}
                {reservation.specialRequests && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <MessageSquare className="w-5 h-5 mr-2 text-orange-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-sm text-gray-900 mb-1">Special Requests</p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {reservation.specialRequests}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    View Details
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    Modify
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no reservations) */}
        {reservations.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No reservations yet</h3>
            <p className="text-gray-500 mb-6">Start exploring restaurants and make your first reservation!</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Browse Restaurants
            </button>
          </div>
        )}
      </div>
    </div>
  )
}